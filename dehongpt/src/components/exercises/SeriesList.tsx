
import React from 'react';
import SeriesCard from './SeriesCard';

export interface SeriesItem {
  id: string;
  title: string;
  description?: string;
  questions: Array<{
    id: string;
    text: string;
    options: Array<{
      id: string;
      text: string;
      isCorrect: boolean;
    }>;
    explanation?: string;
  }>;
  progress: number;
  xp: number;
  duration: number;
}

interface SeriesListProps {
  series: SeriesItem[];
  exerciseId: string;
  exerciseColor: string;
  exerciseDifficultyColor: string;
}

const SeriesList = ({ series, exerciseId, exerciseColor, exerciseDifficultyColor }: SeriesListProps) => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Séries disponibles ({series.length})
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {series.map((seriesItem, index) => (
          <SeriesCard
            key={seriesItem.id}
            series={seriesItem}
            exerciseId={exerciseId}
            index={index}
            exerciseColor={exerciseColor}
            exerciseDifficultyColor={exerciseDifficultyColor}
          />
        ))}
      </div>
    </>
  );
};

export default SeriesList;
