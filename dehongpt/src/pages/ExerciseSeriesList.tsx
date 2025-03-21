
import React from 'react';
import { useParams } from 'react-router-dom';
import ExerciseHeader from '@/components/exercises/ExerciseHeader';
import ExerciseFooter from '@/components/exercises/ExerciseFooter';
import ExerciseSummary from '@/components/exercises/ExerciseSummary';
import SeriesList from '@/components/exercises/SeriesList';
import ExerciseLoadingState from '@/components/exercises/ExerciseLoadingState';
import ExerciseDataProvider from '@/components/exercises/ExerciseDataProvider';

const ExerciseSeriesList = () => {
  const { exerciseId } = useParams<{ exerciseId: string }>();

  if (!exerciseId) {
    return <ExerciseLoadingState loading={false} error="Identifiant d'exercice manquant" />;
  }

  return (
    <ExerciseDataProvider exerciseId={exerciseId}>
      {({ exercise, loading, error }) => {
        // Render loading or error state
        if (loading || error || !exercise) {
          return <ExerciseLoadingState loading={loading} error={error} />;
        }

        // Verify that exercise has series
        if (!exercise.series || exercise.series.length === 0) {
          return <ExerciseLoadingState loading={false} error="Cet exercice ne contient pas encore de séries" />;
        }

        return (
          <div className="min-h-screen bg-slate-50">
            <ExerciseHeader />

            <main className="py-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ExerciseSummary exercise={exercise} />
                <SeriesList 
                  series={exercise.series} 
                  exerciseId={exercise.id}
                  exerciseColor={exercise.color}
                  exerciseDifficultyColor={exercise.difficultyColor}
                />
              </div>
            </main>

            <ExerciseFooter />
          </div>
        );
      }}
    </ExerciseDataProvider>
  );
};

export default ExerciseSeriesList;
