
import React from 'react';
import { BookOpen, Trophy } from 'lucide-react';

interface ExerciseSummaryProps {
  exercise: any;
}

const ExerciseSummary = ({ exercise }: ExerciseSummaryProps) => {
  return (
    <div className="mb-10">
      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-${exercise.difficultyColor}-100 text-${exercise.difficultyColor}-800`}>
        {exercise.difficulty === 'facile' ? 'Facile' : 
         exercise.difficulty === 'moyen' ? 'Moyen' : 'Difficile'}
      </div>
      <h1 className={`text-3xl font-bold text-${exercise.color}-700 mb-2`}>{exercise.title}</h1>
      <p className="text-slate-600 mb-6">{exercise.description}</p>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center text-slate-700">
          <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
          <span>{exercise.subject}</span>
        </div>
        <div className="flex items-center text-slate-700">
          <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
          <span>{exercise.xp} XP (total)</span>
        </div>
      </div>
    </div>
  );
};

export default ExerciseSummary;
