
import React, { useEffect, useState } from 'react';
import { equationsSecondDegre } from '@/data/equations-second-degre';
import { figuresHistoriques } from '@/data/figures-historiques';
import { fonctionsDerivees } from '@/data/fonctions-derivees';
import { reactionsChimiques } from '@/data/reactions-chimiques';
import { analyseLitteraire } from '@/data/analyse-litteraire';

interface ExerciseDataProviderProps {
  exerciseId: string;
  children: (props: {
    exercise: any;
    loading: boolean;
    error: string | null;
  }) => React.ReactNode;
}

const ExerciseDataProvider = ({ exerciseId, children }: ExerciseDataProviderProps) => {
  const [exercise, setExercise] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        setError("Exercice introuvable");
        setLoading(false);
        return;
    }
    
    if (foundExercise) {
      console.log("Exercice ID:", exerciseId);
      console.log("Found Exercise:", foundExercise);
      
      // Vérifier si l'exercice a des séries
      if (!foundExercise.series || foundExercise.series.length === 0) {
        console.error("L'exercice n'a pas de séries:", exerciseId);
        setError("Cet exercice ne contient pas encore de séries.");
      } else {
        console.log("Nombre de séries trouvées:", foundExercise.series.length);
        
        // Vérifier que chaque série a des questions
        const seriesWithoutQuestions = foundExercise.series.filter(
          (series: any) => !series.questions || series.questions.length === 0
        );
        
        if (seriesWithoutQuestions.length > 0) {
          console.warn("Certaines séries n'ont pas de questions:", 
            seriesWithoutQuestions.map((s: any) => s.id));
        }
        
        // S'assurer que l'exercice a au moins 10 séries
        if (foundExercise.series.length < 2) {
          // Créer des séries supplémentaires pour atteindre 10
          const additionalSeries = [];
          for (let i = foundExercise.series.length + 1; i <= 2; i++) {
            additionalSeries.push({
              id: `${foundExercise.id}-serie-${i}`,
              title: `Pratique ${i}`,
              description: `Série d'exercices ${i} sur ${foundExercise.title}`,
              questions: Array(2).fill(0).map((_, qIndex) => ({
                id: `${foundExercise.id}-serie-${i}-q-${qIndex + 1}`,
                text: `Question ${qIndex + 1} sur ${foundExercise.title}`,
                options: [
                  { id: 'a', text: 'Option A', isCorrect: qIndex % 4 === 0 },
                  { id: 'b', text: 'Option B', isCorrect: qIndex % 4 === 1 },
                  { id: 'c', text: 'Option C', isCorrect: qIndex % 4 === 2 },
                  { id: 'd', text: 'Option D', isCorrect: qIndex % 4 === 3 }
                ],
                explanation: `Explication de la réponse à la question ${qIndex + 1}`
              })),
              progress: 0,
              xp: Math.round(foundExercise.xp / 10),
              duration: foundExercise.duration / 2
            });
          }
          
          foundExercise.series = [...foundExercise.series, ...additionalSeries];
          console.log("Séries ajoutées. Nouveau total:", foundExercise.series.length);
        }
      }
      
      setExercise(foundExercise);
    } else {
      console.error("Exercice non trouvé pour l'ID:", exerciseId);
      setError("Exercice introuvable");
    }
    
    setLoading(false);
  }, [exerciseId]);

  return <>{children({ exercise, loading, error })}</>;
};

export default ExerciseDataProvider;
