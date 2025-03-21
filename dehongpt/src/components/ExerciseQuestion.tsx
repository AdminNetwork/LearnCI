
import React, { useState } from 'react';
import { CheckCircle, X, ChevronRight, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from 'react-toastify';

interface ExerciseQuestionProps {
  question: {
    id: string;
    text: string;
    options: { id: string; text: string }[];
    correctAnswer: string;
    explanation: string;
  };
  onNext: () => void;
  onCorrectAnswer: () => void;
}

const ExerciseQuestion = ({ question, onNext, onCorrectAnswer }: ExerciseQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = () => {
    if (!selectedOption) {
      toast.warning("Veuillez sélectionner une réponse");
      return;
    }

    setHasAnswered(true);
    
    if (selectedOption === question.correctAnswer) {
      toast.success("Bonne réponse!");
      onCorrectAnswer();
    } else {
      toast.error("Mauvaise réponse. Essayez encore!");
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    setShowExplanation(false);
    onNext();
  };

  return (
    <Card className="p-6 bg-white rounded-xl shadow-sm mb-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4">{question.text}</h3>
        
        <RadioGroup 
          value={selectedOption || ""} 
          onValueChange={setSelectedOption}
          className="space-y-3"
          disabled={hasAnswered}
        >
          {question.options.map((option) => (
            <div 
              key={option.id} 
              className={`flex items-center space-x-2 p-3 rounded-lg border ${
                hasAnswered && option.id === question.correctAnswer
                  ? 'border-green-300 bg-green-50'
                  : hasAnswered && option.id === selectedOption
                    ? 'border-red-300 bg-red-50'
                    : 'border-slate-200 hover:bg-slate-50'
              }`}
            >
              <RadioGroupItem 
                value={option.id} 
                id={option.id} 
                className={
                  hasAnswered && option.id === question.correctAnswer
                    ? 'text-green-600 border-green-600'
                    : hasAnswered && option.id === selectedOption
                      ? 'text-red-600 border-red-600'
                      : ''
                }
              />
              <Label 
                htmlFor={option.id} 
                className={`flex-grow ${
                  hasAnswered && option.id === question.correctAnswer
                    ? 'text-green-700'
                    : hasAnswered && option.id === selectedOption
                      ? 'text-red-700'
                      : 'text-slate-700'
                }`}
              >
                {option.text}
              </Label>
              {hasAnswered && option.id === question.correctAnswer && (
                <CheckCircle className="h-5 w-5 text-green-600" />
              )}
              {hasAnswered && option.id === selectedOption && option.id !== question.correctAnswer && (
                <X className="h-5 w-5 text-red-600" />
              )}
            </div>
          ))}
        </RadioGroup>
      </div>

      {hasAnswered && showExplanation && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-800 mb-2">Explication:</h4>
          <p className="text-blue-700">{question.explanation}</p>
        </div>
      )}

      <div className="flex justify-between items-center">
        {hasAnswered ? (
          <>
            <Button 
              variant="outline" 
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center gap-2"
            >
              <HelpCircle className="h-4 w-4" />
              {showExplanation ? "Cacher l'explication" : "Voir l'explication"}
            </Button>
            <Button onClick={handleNext} className="bg-blue-500 hover:bg-blue-600 text-white">
              Question suivante
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </>
        ) : (
          <Button 
            onClick={handleAnswer} 
            className="bg-cyan-500 hover:bg-cyan-600 text-white ml-auto"
            disabled={!selectedOption}
          >
            Vérifier ma réponse
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ExerciseQuestion;
