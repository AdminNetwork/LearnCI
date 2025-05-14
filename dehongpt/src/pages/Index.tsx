import { Link } from 'react-router-dom';
import { Volume2, ArrowRight, Calculator, BookOpen, BookText, History, GraduationCap, CheckCircle2, BarChart2, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-cyan-500">LearnCI</span>
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
            <div className="flex items-center">
              <button className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="inline-block mb-6 px-4 py-1.5 bg-blue-50 rounded-full">
              <span className="text-sm font-medium text-blue-600 flex items-center justify-center">
                ✨ Assistant IA pour les élèves ivoiriens
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">
              <span className="text-slate-900">Votre tuteur intelligent personnel </span>
              <br />
              <span className="text-slate-900">pour un </span>
              <span className="text-cyan-500">apprentissage sans limite</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
              CleverTutor combine l'intelligence artificielle et l'expertise pédagogique pour vous aider à 
              comprendre les concepts du programme ivoirien, répondre à vos questions et vous 
              accompagner dans votre progression scolaire.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tutor">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 rounded-full px-8 py-6 text-base">
                  Commencer maintenant <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Explorez nos cours</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Des leçons interactives conçues pour vous aider à comprendre les concepts essentiels
                du programme scolaire ivoirien.
              </p>
            </div>

            {/* Subject Tabs */}
            <div className="flex flex-wrap justify-center gap-12 mb-12">
              <button className="flex flex-col items-center gap-2 text-slate-900 hover:text-cyan-600 transition-colors">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <Calculator className="h-6 w-6" />
                </div>
                <span className="font-medium">Mathématiques</span>
              </button>
              <button className="flex flex-col items-center gap-2 text-slate-900 hover:text-cyan-600 transition-colors">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <BookOpen className="h-6 w-6" />
                </div>
                <span className="font-medium">Sciences</span>
              </button>
              <button className="flex flex-col items-center gap-2 text-slate-900 hover:text-cyan-600 transition-colors">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <BookText className="h-6 w-6" />
                </div>
                <span className="font-medium">Littérature</span>
              </button>
              <button className="flex flex-col items-center gap-2 text-slate-900 hover:text-cyan-600 transition-colors">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <History className="h-6 w-6" />
                </div>
                <span className="font-medium">Histoire</span>
              </button>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Course Card 1 */}
              <Card className="overflow-hidden border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Équations du second degré</h3>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Première</span>
                  </div>
                  <div className="flex items-center text-slate-500 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    <span>20 min</span>
                  </div>
                  <Link to="/cours/equations-second-degre">
                    <Button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-600 font-medium">
                      <BookText className="mr-2 h-4 w-4" />
                      Commencer la leçon
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Course Card 2 */}
              <Card className="overflow-hidden border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Trigonométrie appliquée</h3>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Terminale</span>
                  </div>
                  <div className="flex items-center text-slate-500 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>25 min</span>
                  </div>
                  <Link to="/cours/trigonometrie-appliquee">
                    <Button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-600 font-medium">
                      <BookText className="mr-2 h-4 w-4" />
                      Commencer la leçon
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Course Card 3 */}
              <Card className="overflow-hidden border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Primitives et intégrales</h3>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Terminale</span>
                  </div>
                  <div className="flex items-center text-slate-500 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>30 min</span>
                  </div>
                  <Link to="/cours/primitives-integrales">
                    <Button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-600 font-medium">
                      <BookText className="mr-2 h-4 w-4" />
                      Commencer la leçon
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Interactive Exercises Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <div className="p-2 bg-blue-100 rounded-full inline-flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Exercices interactifs</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Mettez vos connaissances à l'épreuve avec nos exercices interactifs adaptés à votre niveau.
              </p>
            </div>

            {/* Difficulty Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
                Tous
              </button>
              <button className="px-6 py-2 rounded-full bg-green-100 text-green-800 font-medium hover:bg-green-200 transition-colors">
                Facile
              </button>
              <button className="px-6 py-2 rounded-full bg-yellow-100 text-yellow-800 font-medium hover:bg-yellow-200 transition-colors">
                Moyen
              </button>
              <button className="px-6 py-2 rounded-full bg-red-100 text-red-800 font-medium hover:bg-red-200 transition-colors">
                Difficile
              </button>
            </div>

            {/* Exercise Cards - First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Exercise Card 1 */}
              <Card className="overflow-hidden border border-violet-200 rounded-xl hover:shadow-md transition-shadow bg-white">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-violet-700">Équations et inéquations</h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Moyen</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600 mb-4 text-sm">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      10 questions
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      15 min
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-slate-600 mb-1">
                      <span>Progression</span>
                      <span>4/10</span>
                    </div>
                    <Progress value={40} className="h-2 bg-violet-100" indicatorClassName="bg-violet-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-yellow-600">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span className="font-medium">100 XP</span>
                    </div>
                    <Link to="/exercices/equations-second-degre">
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        <BarChart2 className="mr-2 h-4 w-4" />
                        Commencer
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>

              {/* Exercise Card 2 */}
              <Card className="overflow-hidden border border-teal-200 rounded-xl hover:shadow-md transition-shadow bg-white">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-teal-700">Réactions chimiques</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Facile</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600 mb-4 text-sm">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      8 questions
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      12 min
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-slate-600 mb-1">
                      <span>Progression</span>
                      <span>8/8</span>
                    </div>
                    <Progress value={100} className="h-2 bg-teal-100" indicatorClassName="bg-teal-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-yellow-600">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span className="font-medium">80 XP</span>
                    </div>
                    <Button className="bg-green-500 hover:bg-green-600 text-white">
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Révisez
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Exercise Card 3 */}
              <Card className="overflow-hidden border border-amber-200 rounded-xl hover:shadow-md transition-shadow bg-white">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-amber-700">Conjugaison française</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Facile</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600 mb-4 text-sm">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      12 questions
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      10 min
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-slate-600 mb-1">
                      <span>Progression</span>
                      <span>3/12</span>
                    </div>
                    <Progress value={25} className="h-2 bg-amber-100" indicatorClassName="bg-amber-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-yellow-600">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span className="font-medium">75 XP</span>
                    </div>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      <BarChart2 className="mr-2 h-4 w-4" />
                      Commencer
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Exercise Cards - Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Exercise Card 4 */}
              <Card className="overflow-hidden border border-rose-200 rounded-xl hover:shadow-md transition-shadow bg-white">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-rose-700">Figures historiques ivoiriennes</h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Moyen</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600 mb-4 text-sm">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      8 questions
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      20 min
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-slate-600 mb-1">
                      <span>Progression</span>
                      <span>0/8</span>
                    </div>
                    <Progress value={0} className="h-2 bg-rose-100" indicatorClassName="bg-rose-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-yellow-600">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span className="font-medium">110 XP</span>
                    </div>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      <BarChart2 className="mr-2 h-4 w-4" />
                      Commencer
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Exercise Card 5 */}
              <Card className="overflow-hidden border border-indigo-200 rounded-xl hover:shadow-md transition-shadow bg-white">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-indigo-700">Fonctions dérivées</h3>
                    <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">Difficile</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600 mb-4 text-sm">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      6 questions
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      25 min
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-slate-600 mb-1">
                      <span>Progression</span>
                      <span>0/6</span>
                    </div>
                    <Progress value={0} className="h-2 bg-indigo-100" indicatorClassName="bg-indigo-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-yellow-600">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span className="font-medium">150 XP</span>
                    </div>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      <BarChart2 className="mr-2 h-4 w-4" />
                      Commencer
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Exercise Card 6 */}
              <Card className="overflow-hidden border border-orange-200 rounded-xl hover:shadow-md transition-shadow bg-white">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-orange-700">Analyse littéraire</h3>
                    <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">Difficile</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600 mb-4 text-sm">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      5 questions
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      30 min
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-slate-600 mb-1">
                      <span>Progression</span>
                      <span>1/5</span>
                    </div>
                    <Progress value={20} className="h-2 bg-orange-100" indicatorClassName="bg-orange-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-yellow-600">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span className="font-medium">160 XP</span>
                    </div>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      <BarChart2 className="mr-2 h-4 w-4" />
                      Commencer
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">Nos fonctionnalités</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Tout ce dont vous avez besoin pour réussir
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Explorez nos différentes fonctionnalités pour améliorer votre apprentissage
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link to="/cours/contenu/equations-second-degre" className="group">
                  <div className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden border border-gray-200 h-full flex flex-col">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <img
                        src="/lovable-uploads/cdf308ca-465d-4a30-87fb-6140b1fe2272.png"
                        alt="Cours sur les équations du second degré"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-white text-lg font-bold group-hover:text-cyan-200 transition-colors">
                          Équations du second degré
                        </h3>
                      </div>
                    </div>
                    <div className="p-4 flex-grow">
                      <p className="text-gray-600">
                        Apprenez à résoudre des équations du second degré et comprendre leurs applications
                      </p>
                    </div>
                    <div className="p-4 pt-0 flex justify-end">
                      <div className="text-cyan-600 font-medium flex items-center">
                        Accéder au cours <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
                
                {/* ... keep existing code (other feature cards) */}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
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

export default Index;