import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, BarChart2, Trophy, ArrowLeft, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const exercises = [
  {
    id: 'equations-second-degre',
    title: 'Équations du second degré',
    color: 'blue',
    difficultyColor: 'green',
    difficulty: 'facile',
    xp: 100,
    duration: 30,
    series: [], // Initialize with an empty array
    questions: 10,
  },
  {
    id: 'analyse-litteraire',
    title: 'Analyse littéraire',
    color: 'purple',
    difficultyColor: 'yellow',
    difficulty: 'moyen',
    xp: 150,
    duration: 45,
    series: [],
    questions: 5,
  },
  {
    id: 'figures-historiques',
    title: 'Figures historiques',
    color: 'red',
    difficultyColor: 'orange',
    difficulty: 'difficile',
    xp: 200,
    duration: 60,
    series: [],
    questions: 8,
  },
  {
    id: 'fonctions-derivees',
    title: 'Fonctions dérivées',
    color: 'teal',
    difficultyColor: 'blue',
    difficulty: 'facile',
    xp: 120,
    duration: 35,
    series: [],
    questions: 6,
  },
  {
    id: 'reactions-chimiques',
    title: 'Réactions chimiques',
    color: 'cyan',
    difficultyColor: 'green',
    difficulty: 'moyen',
    xp: 180,
    duration: 50,
    series: [],
    questions: 8,
  },
];

const Exercices = () => {
  const [filter, setFilter] = useState('all');

  const filteredExercises = exercises; // Allow access to all exercises directly

  // Calculate total progress for each exercise
  const calculateTotalProgress = (exercise: any) => {
    if (!exercise.series) return { total: 0, progress: 0 };
    
    const totalQuestions = exercise.series.reduce((acc: number, series: any) => 
      acc + (series.questions ? series.questions.length : 0), 0);
    
    const totalProgress = exercise.series.reduce((acc: number, series: any) => 
      acc + (series.progress || 0), 0);
    
    return { total: totalQuestions, progress: totalProgress };
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-cyan-500">CleverTutor</span>
                <span className="ml-2 text-xs px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded-full">Beta</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link to="/" className="text-base font-medium text-slate-900 hover:text-cyan-600">
                Accueil
              </Link>
              <Link to="/cours" className="text-base font-medium text-slate-900 hover:text-cyan-600">
                Cours
              </Link>
              <Link to="/exercices" className="text-base font-medium text-slate-900 hover:text-cyan-600">
                Exercices
              </Link>
              <Link to="/progres" className="text-base font-medium text-slate-900 hover:text-cyan-600">
                Progrès
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Exercices interactifs</h1>
              <p className="text-lg text-slate-600 mt-2">
                Testez vos connaissances avec nos exercices adaptés à votre niveau
              </p>
            </div>
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à l'accueil
              </Button>
            </Link>
          </div>

          {/* Difficulty Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              Tous
            </button>
            <button 
              onClick={() => setFilter('facile')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'facile' ? 'bg-green-500 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              Facile
            </button>
            <button 
              onClick={() => setFilter('moyen')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'moyen' ? 'bg-yellow-500 text-white' : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
              }`}
            >
              Moyen
            </button>
            <button 
              onClick={() => setFilter('difficile')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'difficile' ? 'bg-red-500 text-white' : 'bg-red-100 text-red-800 hover:bg-red-200'
              }`}
            >
              Difficile
            </button>
          </div>

          {/* Exercise Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredExercises.map((exercise) => {
              const progress = calculateTotalProgress(exercise);
              const seriesCount = exercise.series ? exercise.series.length : 0;
              
              return (
                <Card
                  key={exercise.id}
                  className={`overflow-hidden border border-${exercise.color}-200 rounded-xl transition-shadow bg-white hover:shadow-lg hover:scale-105 transform transition-all duration-300`}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className={`text-xl font-bold text-${exercise.color}-700`}>
                        {exercise.title}
                      </h3>
                      <span className={`px-3 py-1 bg-${exercise.difficultyColor}-100 text-${exercise.difficultyColor}-800 text-xs rounded-full`}>
                        {exercise.difficulty === 'facile' ? 'Facile' : 
                         exercise.difficulty === 'moyen' ? 'Moyen' : 'Difficile'}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-600 mb-4 text-sm">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        {seriesCount} séries
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {exercise.duration} min
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-slate-600 mb-1">
                        <span>Progression</span>
                        <span>{progress.progress}/{progress.total}</span>
                      </div>
                      <Progress 
                        value={(progress.total > 0 ? (progress.progress / progress.total) * 100 : 0)} 
                        className={`h-2 bg-${exercise.color}-100`} 
                        indicatorClassName={`bg-${exercise.color}-500`} 
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-yellow-600">
                        <Trophy className="h-4 w-4 mr-1" />
                        <span className="font-medium">{exercise.xp} XP</span>
                      </div>
                      <Link to={`/exercices/${exercise.id}`}>
                        <Button className={`${
                          progress.progress === progress.total && progress.total > 0
                          ? 'bg-green-500 hover:bg-green-600' 
                          : 'bg-blue-500 hover:bg-blue-600'
                        } text-white`}>
                          {progress.progress === progress.total && progress.total > 0 ? (
                            <>
                              <CheckCircle2 className="mr-2 h-4 w-4" />
                              Révisez
                            </>
                          ) : (
                            <>
                              <BarChart2 className="mr-2 h-4 w-4" />
                              Commencer
                            </>
                          )}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <span className="text-2xl font-bold text-cyan-500">CleverTutor</span>
            </div>
            <p className="mt-4 text-slate-500">
              © 2023 CleverTutor. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Exercices;
