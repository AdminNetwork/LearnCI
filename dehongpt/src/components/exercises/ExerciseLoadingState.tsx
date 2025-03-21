
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ExerciseLoadingStateProps {
  loading: boolean;
  error: string | null;
}

const ExerciseLoadingState = ({ loading, error }: ExerciseLoadingStateProps) => {
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">Chargement...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            {error}
          </h2>
          <Link to="/exercices">
            <Button variant="outline">Retour aux exercices</Button>
          </Link>
        </div>
      </div>
    );
  }

  return null;
};

export default ExerciseLoadingState;
