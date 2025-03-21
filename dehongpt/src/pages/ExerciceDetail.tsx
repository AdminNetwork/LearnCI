import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, BookOpen, CheckCircle, Clock, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import ExerciseQuestion from '@/components/ExerciseQuestion';
import { equationsSecondDegre } from '@/data/equations-second-degre';
import { figuresHistoriques } from '@/data/figures-historiques';
import { fonctionsDerivees } from '@/data/fonctions-derivees';
import { reactionsChimiques } from '@/data/reactions-chimiques';
import { analyseLitteraire } from '@/data/analyse-litteraire';
import { toast } from 'react-toastify';

const ExerciceDetail = () => {
  const { exerciseId, seriesId } = useParams<{ exerciseId: string; seriesId: string }>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [exercise, setExercise] = useState<any>(null);
  const [series, setSeries] = useState<any>(null);
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trouver l'exercice correspondant
    let foundExercise;
    switch (exerciseId) {
      case "equations-second-degre":
        foundExercise = equationsSecondDegre;
        break;
      case "figures-historiques":
        foundExercise = figuresHistoriques;
        break;
      case "fonctions-derivees":
        foundExercise = fonctionsDerivees;
        break;
      case "reactions-chimiques":
        foundExercise = reactionsChimiques;
        break;
      case "analyse-litteraire":
        foundExercise = analyseLitteraire;
        break;
      default:
        console.error("Exercice non trouvé pour l'ID:", exerciseId);
        toast.error("Exercice introuvable");
        navigate('/exercices');
        return;
    }
    
    if (foundExercise) {
      setExercise(foundExercise);
      
      // Trouver la série correspondante
      if (seriesId && foundExercise.series) {
        const foundSeries = foundExercise.series.find((s: any) => s.id === seriesId);
        if (foundSeries) {
          setSeries(foundSeries);
          console.log("Série trouvée:", foundSeries);
        } else {
          console.error("Série non trouvée pour l'ID:", seriesId);
          toast.error("Série d'exercices introuvable");
          navigate(`/exercices/${exerciseId}`);
        }
      } else {
        console.error("ID de série manquant ou pas de séries dans l'exercice");
        toast.error("Identifiant de série manquant");
        navigate(`/exercices/${exerciseId}`);
      }
    } else {
      console.error("Exercice non trouvé pour l'ID:", exerciseId);
      toast.error("Exercice introuvable");
      navigate('/exercices');
    }
  }, [exerciseId, seriesId, navigate]);

  if (!exercise || !series) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">Chargement de l'exercice...</h2>
          <Link to="/exercices">
            <Button variant="outline">Retour aux exercices</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleCorrectAnswer = () => {
    setCorrectAnswers(prev => prev + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < series.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Fin de l'exercice
      setIsComplete(true);
      const totalQuestions = series.questions.length;
      const score = (correctAnswers / totalQuestions) * 100;
      
      if (score >= 80) {
        toast.success(`Félicitations! Vous avez terminé la série avec ${score.toFixed(0)}% de bonnes réponses!`);
      } else if (score >= 50) {
        toast.info(`Bon travail! Vous avez terminé la série avec ${score.toFixed(0)}% de bonnes réponses.`);
      } else {
        toast.warning(`Vous avez terminé la série avec ${score.toFixed(0)}% de bonnes réponses. Continuez à pratiquer!`);
      }
    }
  };

  const restartExercise = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setIsComplete(false);
  };

  // Vérifier que la série a des questions
  if (!series.questions || series.questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Cette série ne contient pas de questions
          </h2>
          <Link to={`/exercices/${exerciseId}`}>
            <Button variant="outline">Retour aux séries</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-cyan-500">CleverTutor</span>
                <span className="ml-2 text-xs px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded-full">Beta</span>
              </Link>
            </div>
            <div className="flex gap-4">
              <Link to={`/exercices/${exerciseId}`}>
                <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
                  <List className="mr-2 h-4 w-4" />
                  Toutes les séries
                </Button>
              </Link>
              <Link to="/exercices">
                <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour aux exercices
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Exercise Header */}
        <div className="mb-10">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 bg-${exercise.difficultyColor}-100 text-${exercise.difficultyColor}-800`}>
            {exercise.difficulty === 'facile' ? 'Facile' : 
             exercise.difficulty === 'moyen' ? 'Moyen' : 'Difficile'}
          </div>
          <h1 className={`text-3xl font-bold text-${exercise.color}-700 mb-2`}>{exercise.title}</h1>
          <h2 className="text-xl font-semibold text-slate-700 mb-2">Série {series.title}</h2>
          <p className="text-slate-600 mb-6">{series.description || exercise.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-slate-700">
              <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
              <span>{exercise.subject}</span>
            </div>
            <div className="flex items-center text-slate-700">
              <Clock className="h-5 w-5 mr-2 text-amber-600" />
              <span>{series.duration || exercise.duration} minutes</span>
            </div>
            <div className="flex items-center text-slate-700">
              <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
              <span>{series.xp || exercise.xp} XP</span>
            </div>
          </div>
          
          {!isComplete && (
            <div className="mb-6">
              <div className="flex justify-between text-sm text-slate-600 mb-1">
                <span>Progression</span>
                <span>{currentQuestionIndex + 1}/{series.questions.length}</span>
              </div>
              <Progress 
                value={((currentQuestionIndex + 1) / series.questions.length) * 100} 
                className={`h-2 bg-${exercise.color}-100`} 
                indicatorClassName={`bg-${exercise.color}-500`} 
              />
            </div>
          )}
        </div>

        {/* Exercise Content */}
        {!isComplete ? (
          <ExerciseQuestion 
            question={series.questions[currentQuestionIndex]} 
            onNext={handleNextQuestion}
            onCorrectAnswer={handleCorrectAnswer}
          />
        ) : (
          <Card className="overflow-hidden rounded-xl shadow-sm">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Série terminée !
                </h2>
                <p className="text-slate-600">
                  Vous avez répondu correctement à {correctAnswers} sur {series.questions.length} questions.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between text-sm text-slate-600 mb-1">
                  <span>Score</span>
                  <span>{((correctAnswers / series.questions.length) * 100).toFixed(0)}%</span>
                </div>
                <Progress 
                  value={(correctAnswers / series.questions.length) * 100} 
                  className="h-4 bg-slate-100" 
                  indicatorClassName={`${
                    (correctAnswers / series.questions.length) >= 0.8 
                      ? 'bg-green-500' 
                      : (correctAnswers / series.questions.length) >= 0.5 
                        ? 'bg-amber-500' 
                        : 'bg-red-500'
                  }`} 
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  onClick={restartExercise}
                  className="w-full sm:w-auto"
                >
                  Recommencer la série
                </Button>
                <Link to={`/exercices/${exerciseId}`} className="w-full sm:w-auto">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    Autres séries
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default ExerciceDetail;
