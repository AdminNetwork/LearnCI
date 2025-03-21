
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { SeriesItem } from './SeriesList';

interface SeriesCardProps {
  series: SeriesItem;
  exerciseId: string;
  index: number;
  exerciseColor: string;
  exerciseDifficultyColor: string;
}

const SeriesCard = ({ series, exerciseId, index, exerciseColor, exerciseDifficultyColor }: SeriesCardProps) => {
  const questionCount = series.questions ? series.questions.length : 0;
  
  return (
    <Card 
      className={`overflow-hidden border border-${exerciseColor}-200 hover:border-${exerciseColor}-300 rounded-xl hover:shadow-md transition-shadow bg-white`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className={`text-xl font-bold text-${exerciseColor}-700`}>
            Série {index + 1}: {series.title}
          </h3>
          <span className={`px-3 py-1 bg-${exerciseDifficultyColor}-100 text-${exerciseDifficultyColor}-800 text-xs rounded-full`}>
            {questionCount} questions
          </span>
        </div>
        
        <p className="text-slate-600 mb-4 line-clamp-2">
          {series.description || "Testez vos connaissances avec cette série d'exercices."}
        </p>
        
        <div className="flex items-center gap-4 text-slate-600 mb-4 text-sm">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {series.duration || 0} min
          </div>
          <div className="flex items-center">
            <Trophy className="h-4 w-4 mr-1 text-yellow-600" />
            <span className="font-medium">{series.xp || 0} XP</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm text-slate-600 mb-1">
            <span>Progression</span>
            <span>{series.progress || 0}/{questionCount}</span>
          </div>
          <Progress 
            value={((series.progress || 0) / (questionCount || 1)) * 100} 
            className={`h-2 bg-${exerciseColor}-100`} 
            indicatorClassName={`bg-${exerciseColor}-500`} 
          />
        </div>
        
        <div className="flex justify-end">
          <Link to={`/exercices/${exerciseId}/series/${series.id}`}>
            <Button className={`bg-${exerciseColor}-500 hover:bg-${exerciseColor}-600 text-white`}>
              {series.progress === questionCount && questionCount > 0 ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Révisez
                </>
              ) : (
                <>
                  Commencer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default SeriesCard;
