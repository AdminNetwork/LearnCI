
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { coursesData } from '@/data/courseData';

const Cours = () => {
  const navigate = useNavigate();

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Cours disponibles</h1>
          <p className="mt-2 text-lg text-gray-600">
            Explorez notre bibliothèque de cours interactifs pour améliorer vos connaissances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <Card 
              key={course.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow rounded-xl"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <div className="flex items-center mt-1 text-gray-200 text-sm">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{course.category}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 line-clamp-2 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-gray-700">{course.level}</div>
                  <Link to={`/cours/contenu/${course.id}`}>
                    <Button className="bg-cyan-600 hover:bg-cyan-700">
                      Accéder au cours
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cours;
