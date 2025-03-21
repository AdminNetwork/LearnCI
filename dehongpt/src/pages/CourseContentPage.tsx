
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, Clock } from 'lucide-react';
import { getCoursById } from '@/data/courseData';
import LessonContent from '@/components/LessonContent';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

const CourseContentPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [activeLesson, setActiveLesson] = useState(0);
  const [activeContent, setActiveContent] = useState(0);
  
  const course = getCoursById(courseId || '');
  
  // Si le cours n'existe pas, on affiche un message d'erreur
  if (!course) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Cours non trouvé</h1>
          <p className="mb-6">Le cours que vous recherchez n'existe pas ou a été supprimé.</p>
          <Link to="/cours">
            <Button>Retour aux cours</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Navigation entre les leçons
  const handleNextContent = () => {
    if (activeContent < course.lessons[activeLesson].contents.length - 1) {
      setActiveContent(activeContent + 1);
    } else if (activeLesson < course.lessons.length - 1) {
      setActiveLesson(activeLesson + 1);
      setActiveContent(0);
    }
  };

  const handlePrevContent = () => {
    if (activeContent > 0) {
      setActiveContent(activeContent - 1);
    } else if (activeLesson > 0) {
      setActiveLesson(activeLesson - 1);
      setActiveContent(course.lessons[activeLesson - 1].contents.length - 1);
    }
  };
  
  // Extraction des données de la leçon actuelle
  const currentLesson = course.lessons[activeLesson];
  const currentContent = currentLesson?.contents[activeContent];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">CleverTutor</span>
                <span className="ml-2 text-xs px-2 py-0.5 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 rounded-full">Beta</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link to="/" className="text-base font-medium text-gray-600 hover:text-cyan-600 transition-colors">
                Accueil
              </Link>
              <Link to="/cours" className="text-base font-medium text-gray-600 hover:text-cyan-600 transition-colors">
                Cours
              </Link>
              <Link to="/exercices" className="text-base font-medium text-gray-600 hover:text-cyan-600 transition-colors">
                Exercices
              </Link>
              <Link to="/tutor" className="text-base font-medium text-gray-600 hover:text-cyan-600 transition-colors">
                Tuteur IA
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/cours" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux cours
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar avec les leçons */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="overflow-hidden border border-slate-200 shadow-md bg-white rounded-xl">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4">
                <h3 className="text-lg font-bold text-white">
                  Programme du cours
                </h3>
              </div>
              <div className="p-4 space-y-2">
                {course.lessons.map((lesson, index) => (
                  <div key={index} className="space-y-2">
                    <div
                      className={`p-2 rounded-md cursor-pointer ${
                        activeLesson === index
                          ? 'bg-cyan-50 border-l-4 border-cyan-500'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        setActiveLesson(index);
                        setActiveContent(0);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${activeLesson === index ? 'text-cyan-700' : 'text-gray-700'}`}>
                          {index + 1}. {lesson.title}
                        </span>
                        {/* Indicateur de progression */}
                        <span className="text-xs text-gray-500">
                          {lesson.contents.filter(c => c.completed).length}/{lesson.contents.length}
                        </span>
                      </div>
                    </div>
                    
                    {/* Liste des contenus si la leçon est active */}
                    {activeLesson === index && (
                      <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-2">
                        {lesson.contents.map((content, contentIndex) => (
                          <div
                            key={contentIndex}
                            className={`p-2 rounded-md text-sm cursor-pointer flex items-center ${
                              activeContent === contentIndex
                                ? 'bg-blue-50 text-blue-600'
                                : 'hover:bg-gray-50'
                            }`}
                            onClick={() => setActiveContent(contentIndex)}
                          >
                            {content.type === 'video' && (
                              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 flex items-center justify-center">
                                <div className="w-0 h-0 border-l-4 border-l-blue-600 border-t-3 border-t-transparent border-b-3 border-b-transparent ml-0.5"></div>
                              </div>
                            )}
                            {content.type === 'text' && (
                              <BookOpen className="w-4 h-4 mr-2 text-gray-500" />
                            )}
                            {content.type === 'exercise' && (
                              <CheckCircle className="w-4 h-4 mr-2 text-gray-500" />
                            )}
                            <span>{content.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="overflow-hidden border border-slate-200 shadow-md bg-white rounded-xl">
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Informations du cours</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-600">Durée: {course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-600">Niveau: {course.level}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-600">Catégorie: {course.category}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-9 space-y-6">
            <Card className="overflow-hidden border border-slate-200 shadow-md bg-white rounded-xl">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6">
                <h1 className="text-2xl font-bold text-white">{course.title}</h1>
                <p className="text-blue-100 mt-1">{course.description}</p>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-bold">
                    {currentLesson.title} - {currentContent?.title}
                  </h2>
                  <Separator className="mt-2" />
                </div>

                {currentContent && (
                  <>
                    <LessonContent content={currentContent} />
                    
                    <div className="flex justify-between mt-6">
                      <Button 
                        variant="outline" 
                        onClick={handlePrevContent}
                        disabled={activeLesson === 0 && activeContent === 0}
                      >
                        Précédent
                      </Button>
                      <Button 
                        onClick={handleNextContent}
                        disabled={activeLesson === course.lessons.length - 1 && activeContent === currentLesson.contents.length - 1}
                      >
                        Suivant
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContentPage;
