
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Play, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

type LessonContentType = {
  type: 'video' | 'text' | 'exercise';
  title: string;
  content: string;
  duration: string;
  completed: boolean;
};

interface LessonContentProps {
  content: LessonContentType;
}

const LessonContent = ({ content }: LessonContentProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [answered, setAnswered] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(false);
  
  const toggleAnswer = (index: number) => {
    if (answered) return;
    
    setSelectedAnswers(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };
  
  const checkAnswers = () => {
    if (content.title.includes("identifier") || content.title.includes("Identifier")) {
      // Pour cet exercice spécifique, les bonnes réponses sont 0 et 4
      const isCorrect = 
        selectedAnswers.includes(0) && 
        selectedAnswers.includes(4) && 
        selectedAnswers.length === 2;
      
      if (isCorrect) {
        toast({
          title: "Bravo !",
          description: "Vos réponses sont correctes.",
          className: "bg-green-50 border-green-200 text-green-800",
        });
      } else {
        toast({
          title: "Attention",
          description: "Certaines réponses sont incorrectes. Essayez encore.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Exercice soumis",
        description: "Vos réponses ont été enregistrées.",
      });
    }
    
    setAnswered(true);
  };
  
  const handleVideoPlay = () => {
    setPlayingVideo(true);
    setTimeout(() => {
      setPlayingVideo(false);
      toast({
        title: "Fonctionnalité limitée",
        description: "La lecture vidéo n'est pas disponible dans cette version de démonstration.",
        className: "bg-amber-50 border-amber-200 text-amber-800",
      });
    }, 1500);
  };
  
  return (
    <Card className="mb-4 overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <h3 className="text-xl font-bold">{content.title}</h3>
            {content.completed && (
              <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <Check className="h-3 w-3 mr-1" />
                Complété
              </span>
            )}
          </div>
          <span className="text-sm text-gray-500">{content.duration}</span>
        </div>
        
        {content.type === 'video' && (
          <div className="rounded-lg bg-gray-100 p-6 mb-4">
            <div 
              onClick={handleVideoPlay}
              className={`aspect-video bg-slate-800 rounded-md flex items-center justify-center mb-4 cursor-pointer transition-colors relative overflow-hidden group ${playingVideo ? 'animate-pulse' : 'hover:bg-slate-700'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/40 to-purple-700/40"></div>
              {!playingVideo && (
                <>
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-xs font-medium">
                    {content.duration}
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center z-10 transform transition-transform group-hover:scale-110">
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-medium">{content.title}</h4>
                  </div>
                </>
              )}
              {playingVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <div className="prose max-w-none text-left">
              <h4 className="font-semibold text-lg mb-2">Résumé de la vidéo</h4>
              <p className="text-gray-700 whitespace-pre-line">{content.content}</p>
              <div className="flex justify-end mt-4">
                <Button variant="outline" className="text-purple-700 border-purple-200 hover:bg-purple-50">
                  Télécharger la transcription
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {content.type === 'text' && (
          <div className="prose max-w-none bg-white rounded-lg p-6 border border-slate-100">
            <div className="text-gray-700 whitespace-pre-line">{content.content}</div>
            
            {content.content.includes("formule") && (
              <div className="my-6 p-5 bg-slate-50 border-l-4 border-cyan-500 rounded-r-md">
                <h4 className="font-semibold text-lg mb-2 text-cyan-800">Formule à retenir</h4>
                <div className="overflow-x-auto">
                  <div className="text-center p-4 text-xl font-serif bg-white rounded shadow-sm border border-slate-100">
                    {content.title.includes("quadratique") ? (
                      <span className="font-medium">x = <span className="text-purple-700">(-b ± √(b² - 4ac))</span> / <span className="text-cyan-700">2a</span></span>
                    ) : content.title.includes("trigonométrie") ? (
                      <span className="font-medium">sin²(θ) + cos²(θ) = 1</span>
                    ) : (
                      <span className="font-medium">F(x) = ∫f(t)dt</span>
                    )}
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  {content.title.includes("quadratique") && (
                    <p>Cette formule permet de résoudre toute équation du second degré de la forme ax² + bx + c = 0, où a ≠ 0.</p>
                  )}
                </div>
              </div>
            )}
            
            <div className="mt-6 flex justify-between items-center">
              <Button variant="outline" size="sm" className="text-slate-600">
                Précédent
              </Button>
              <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                Suivant
              </Button>
            </div>
          </div>
        )}
        
        {content.type === 'exercise' && (
          <div className="border border-amber-200 bg-amber-50 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3">Exercice</h4>
            <div className="text-gray-700 mb-6 whitespace-pre-line">{content.content}</div>
            
            {content.content.includes("identifiez") && (
              <div className="mb-6 space-y-3 bg-white p-4 rounded-md border border-amber-100">
                <div className="flex items-center p-3 hover:bg-amber-50 rounded cursor-pointer transition-colors" onClick={() => toggleAnswer(0)}>
                  <div className="w-5 h-5 rounded border border-amber-400 mr-3 flex items-center justify-center">
                    {selectedAnswers.includes(0) && <CheckCircle className="h-4 w-4 text-amber-600" />}
                  </div>
                  <span>3x² - 2x + 1 = 0 <span className="text-amber-700">(a=3, b=-2, c=1)</span></span>
                  {answered && selectedAnswers.includes(0) && <CheckCircle className="ml-2 h-4 w-4 text-green-600" />}
                </div>
                <div className="flex items-center p-3 hover:bg-amber-50 rounded cursor-pointer transition-colors" onClick={() => toggleAnswer(1)}>
                  <div className="w-5 h-5 rounded border border-amber-400 mr-3 flex items-center justify-center">
                    {selectedAnswers.includes(1) && <CheckCircle className="h-4 w-4 text-amber-600" />}
                  </div>
                  <span>x³ + 2x² - 5 = 0 <span className="text-amber-700">(N'est pas du second degré)</span></span>
                  {answered && selectedAnswers.includes(1) && <XCircle className="ml-2 h-4 w-4 text-red-600" />}
                </div>
                <div className="flex items-center p-3 hover:bg-amber-50 rounded cursor-pointer transition-colors" onClick={() => toggleAnswer(2)}>
                  <div className="w-5 h-5 rounded border border-amber-400 mr-3 flex items-center justify-center">
                    {selectedAnswers.includes(2) && <CheckCircle className="h-4 w-4 text-amber-600" />}
                  </div>
                  <span>4x - 7 = 0 <span className="text-amber-700">(N'est pas du second degré)</span></span>
                  {answered && selectedAnswers.includes(2) && <XCircle className="ml-2 h-4 w-4 text-red-600" />}
                </div>
                <div className="flex items-center p-3 hover:bg-amber-50 rounded cursor-pointer transition-colors" onClick={() => toggleAnswer(3)}>
                  <div className="w-5 h-5 rounded border border-amber-400 mr-3 flex items-center justify-center">
                    {selectedAnswers.includes(3) && <CheckCircle className="h-4 w-4 text-amber-600" />}
                  </div>
                  <span>x² = 9 <span className="text-amber-700">(a=1, b=0, c=-9)</span></span>
                  {answered && selectedAnswers.includes(3) && <XCircle className="ml-2 h-4 w-4 text-red-600" />}
                </div>
                <div className="flex items-center p-3 hover:bg-amber-50 rounded cursor-pointer transition-colors" onClick={() => toggleAnswer(4)}>
                  <div className="w-5 h-5 rounded border border-amber-400 mr-3 flex items-center justify-center">
                    {selectedAnswers.includes(4) && <CheckCircle className="h-4 w-4 text-amber-600" />}
                  </div>
                  <span>2x² + x = 3 <span className="text-amber-700">(a=2, b=1, c=-3)</span></span>
                  {answered && selectedAnswers.includes(4) && <CheckCircle className="ml-2 h-4 w-4 text-green-600" />}
                </div>
              </div>
            )}
            
            <div className="flex justify-end">
              <Button 
                className="bg-amber-500 hover:bg-amber-600 text-white flex items-center"
                onClick={checkAnswers}
                disabled={answered}
              >
                {answered ? "Réponses soumises" : "Vérifier mes réponses"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {answered && (
              <div className="mt-6 p-4 bg-white rounded-md border border-amber-200">
                <h5 className="font-semibold text-md mb-2">Corrigé</h5>
                <p className="text-gray-700">
                  Une équation du second degré est de la forme ax² + bx + c = 0, où a ≠ 0. 
                  Les réponses correctes sont donc la première (3x² - 2x + 1 = 0) et la dernière (2x² + x = 3, 
                  qui peut s'écrire 2x² + x - 3 = 0).
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LessonContent;
