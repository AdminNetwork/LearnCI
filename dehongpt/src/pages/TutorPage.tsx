import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ListChecks, Settings, MessageSquare, FileText, Award, Volume2, ArrowRight, Calculator, BookText, History, GraduationCap, ArrowLeft, Sparkles } from 'lucide-react';
import APIKeyInput from '@/components/APIKeyInput';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Avatar, { tutors } from '@/components/Avatar';
import { Textarea } from '@/components/ui/textarea';
import SchoolLevelNavigation from '@/components/SchoolLevelNavigation';
import MessageList from '@/components/MessageList';
import ChatInput from '@/components/ChatInput';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const TutorPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [response, setResponse] = useState('');
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSubject, setActiveSubject] = useState('math');
  const [activeLevel, setActiveLevel] = useState('college');
  const [activeClass, setActiveClass] = useState('');
  const [isChatActive, setIsChatActive] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState('yeo');
  const { toast } = useToast();

  const handleClassChange = (classId: string) => {
    setActiveClass(classId);
    setResponse('');
    setQuestion('');
    setIsChatActive(true);
  };

  const getClassColor = () => {
    const level = activeLevel === 'college' ? 'college' : 'lycee';
    const schoolLevel = schoolLevels.find(l => l.id === level);
    
    if (schoolLevel && activeClass) {
      const schoolClass = schoolLevel.classes.find(c => c.id === activeClass);
      if (schoolClass) {
        return schoolClass.color;
      }
    }
    
    return 'from-cyan-500 to-blue-600';
  };

  const getClassName = () => {
    const level = activeLevel === 'college' ? 'college' : 'lycee';
    const schoolLevel = schoolLevels.find(l => l.id === level);
    
    if (schoolLevel && activeClass) {
      const schoolClass = schoolLevel.classes.find(c => c.id === activeClass);
      if (schoolClass) {
        return schoolClass.name;
      }
    }
    
    return '';
  };

  const handleSendMessage = async (message: string) => {
    if (!apiKey) {
      toast({
        title: "Erreur",
        description: "Veuillez d'abord configurer votre clé API OpenAI",
        variant: "destructive",
      });
      return;
    }

    if (!message.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une question",
        variant: "destructive",
      });
      return;
    }

    if (!activeClass) {
      toast({
        title: "Information",
        description: "Veuillez d'abord sélectionner une classe",
        variant: "default",
      });
      return;
    }

    const userMessage: Message = { role: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);
    
    setIsLoading(true);
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            {
              role: 'system',
              content: `Vous êtes un tuteur éducatif expérimenté spécialisé dans le programme scolaire ivoirien pour le niveau ${activeLevel === 'college' ? 'Collège' : 'Lycée'}, classe de ${getClassName()}. 
              Vous êtes expert en ${activeSubject === 'math' ? 'mathématiques' : 
                       activeSubject === 'french' ? 'français' : 
                       activeSubject === 'history' ? 'histoire-géographie' : 
                       activeSubject === 'science' ? 'sciences' : activeSubject}.
              Expliquez les concepts de manière simple, adaptée aux enfants de niveau ${getClassName()}. Utilisez des exemples concrets liés à la réalité ivoirienne.
              Soyez encourageant et pédagogue. Votre objectif est d'aider l'élève à comprendre par lui-même.`
            },
            ...messages.map(msg => ({ role: msg.role, content: msg.content })),
            { role: 'user', content: message }
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Erreur lors de la génération de réponse');
      }

      const data = await response.json();
      const responseContent = data.choices[0].message.content;
      
      const assistantMessage: Message = { role: 'assistant', content: responseContent };
      setMessages(prev => [...prev, assistantMessage]);
      
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAskQuestion = async () => {
    if (!apiKey) {
      toast({
        title: "Erreur",
        description: "Veuillez d'abord configurer votre clé API OpenAI",
        variant: "destructive",
      });
      return;
    }

    if (!question.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une question",
        variant: "destructive",
      });
      return;
    }

    if (!activeClass) {
      toast({
        title: "Information",
        description: "Veuillez d'abord sélectionner une classe",
        variant: "default",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            {
              role: 'system',
              content: `Vous êtes un tuteur éducatif expérimenté spécialisé dans le programme scolaire ivoirien pour le niveau ${activeLevel === 'college' ? 'Collège' : 'Lycée'}, classe de ${getClassName()}. 
              Vous êtes expert en ${activeSubject === 'math' ? 'mathématiques' : 
                       activeSubject === 'french' ? 'français' : 
                       activeSubject === 'history' ? 'histoire-géographie' : 
                       activeSubject === 'science' ? 'sciences' : activeSubject}.
              Expliquez les concepts de manière simple, adaptée aux enfants de niveau ${getClassName()}. Utilisez des exemples concrets liés à la réalité ivoirienne.
              Soyez encourageant et pédagogue. Votre objectif est d'aider l'élève à comprendre par lui-même.`
            },
            {
              role: 'user',
              content: question
            }
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Erreur lors de la génération de réponse');
      }

      const data = await response.json();
      setResponse(data.choices[0].message.content);
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAskQuestion();
    }
  };

  const getTutorName = () => {
    const tutor = tutors.find(t => t.id === selectedTutor);
    return tutor ? tutor.name : 'Prof. Yeo';
  };

  const schoolLevels = [
    {
      id: 'college',
      name: 'Collège',
      classes: [
        { id: '6e', name: '6ème', color: 'from-indigo-500 to-blue-500' },
        { id: '5e', name: '5ème', color: 'from-cyan-500 to-blue-500' },
        { id: '4e', name: '4ème', color: 'from-teal-500 to-green-500' },
        { id: '3e', name: '3ème', color: 'from-blue-500 to-indigo-600' }
      ]
    },
    {
      id: 'lycee',
      name: 'Lycée',
      classes: [
        { id: '2nd', name: 'Seconde', color: 'from-purple-500 to-pink-500' },
        { id: '1st', name: 'Première', color: 'from-red-500 to-orange-500' },
        { id: 'term', name: 'Terminale', color: 'from-amber-500 to-yellow-500' }
      ]
    }
  ];

  useEffect(() => {
    if (activeClass) {
      setIsChatActive(true);
    }
  }, [activeClass]);

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
              <Link to="/progres" className="text-base font-medium text-gray-600 hover:text-cyan-600 transition-colors">
                Progrès
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

        <div className="mb-8 max-w-lg mx-auto">
          <Card className="overflow-hidden border-0 shadow-md bg-white rounded-2xl">
            <CardContent className="p-6">
              <Avatar 
                avatarType="teacher" 
                onTutorChange={setSelectedTutor}
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <SchoolLevelNavigation 
              onLevelChange={setActiveLevel}
              onClassChange={handleClassChange}
              onSubjectChange={setActiveSubject}
              activeLevel={activeLevel}
              activeClass={activeClass}
              activeSubject={activeSubject}
            />

            <Card className="overflow-hidden border-0 shadow-md bg-white rounded-2xl">
              <div className="bg-gradient-radial from-cyan-500 to-blue-600 p-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Configuration
                </h2>
              </div>
              <CardContent className="p-4">
                <div className="mt-2">
                  <APIKeyInput onSubmit={setApiKey} />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-9 space-y-6">
            <Card className="overflow-hidden border-0 shadow-md bg-white rounded-2xl">
              <div className={`bg-gradient-radial ${getClassColor()} p-6`}>
                <h1 className="text-2xl font-bold text-white">
                  {getTutorName()} - {activeLevel === 'college' ? 'Collège' : 'Lycée'} {getClassName()}
                </h1>
                <p className="text-blue-100 mt-1">
                  {activeClass 
                    ? "Posez vos questions au tuteur et obtenez des explications personnalisées" 
                    : "Veuillez sélectionner une classe pour commencer"}
                </p>
              </div>

              <CardContent className="p-6">
                <Tabs defaultValue={activeSubject} value={activeSubject} className="w-full" onValueChange={setActiveSubject}>
                  <TabsList className="w-full mb-6 grid grid-cols-4 bg-gray-100/80 p-1 rounded-xl">
                    <TabsTrigger 
                      value="math" 
                      className="rounded-lg py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300"
                    >
                      <Calculator className="h-4 w-4 mr-2" />
                      Maths
                    </TabsTrigger>
                    <TabsTrigger 
                      value="french" 
                      className="rounded-lg py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300"
                    >
                      <BookText className="h-4 w-4 mr-2" />
                      Français
                    </TabsTrigger>
                    <TabsTrigger 
                      value="science" 
                      className="rounded-lg py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300"
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Sciences
                    </TabsTrigger>
                    <TabsTrigger 
                      value="history" 
                      className="rounded-lg py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300"
                    >
                      <History className="h-4 w-4 mr-2" />
                      Histoire-Géo
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="math" className="space-y-6">
                    {isChatActive ? (
                      <div className="bg-white rounded-xl overflow-hidden">
                        <div className="h-[60vh] flex flex-col">
                          <MessageList messages={messages} tutorId={selectedTutor} />
                          <div className="mt-auto pt-4 pb-6 px-4 bg-[#1C1C1C]">
                            <ChatInput 
                              onSend={handleSendMessage} 
                              isLoading={isLoading} 
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center p-12">
                        <div className="text-center">
                          <GraduationCap className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                          <h3 className="text-xl font-medium text-gray-700 mb-2">Veuillez sélectionner une classe</h3>
                          <p className="text-gray-500">Pour commencer, choisissez une classe dans le menu de gauche</p>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="french" className="space-y-6">
                    {isChatActive ? (
                      <div className="bg-white rounded-xl overflow-hidden">
                        <div className="h-[60vh] flex flex-col">
                          <MessageList messages={messages} tutorId={selectedTutor} />
                          <div className="mt-auto pt-4 pb-6 px-4 bg-[#1C1C1C]">
                            <ChatInput 
                              onSend={handleSendMessage} 
                              isLoading={isLoading} 
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center p-12">
                        <div className="text-center">
                          <GraduationCap className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                          <h3 className="text-xl font-medium text-gray-700 mb-2">Veuillez sélectionner une classe</h3>
                          <p className="text-gray-500">Pour commencer, choisissez une classe dans le menu de gauche</p>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="science" className="space-y-6">
                    {isChatActive ? (
                      <div className="bg-white rounded-xl overflow-hidden">
                        <div className="h-[60vh] flex flex-col">
                          <MessageList messages={messages} tutorId={selectedTutor} />
                          <div className="mt-auto pt-4 pb-6 px-4 bg-[#1C1C1C]">
                            <ChatInput 
                              onSend={handleSendMessage} 
                              isLoading={isLoading} 
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center p-12">
                        <div className="text-center">
                          <GraduationCap className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                          <h3 className="text-xl font-medium text-gray-700 mb-2">Veuillez sélectionner une classe</h3>
                          <p className="text-gray-500">Pour commencer, choisissez une classe dans le menu de gauche</p>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="history" className="space-y-6">
                    {isChatActive ? (
                      <div className="bg-white rounded-xl overflow-hidden">
                        <div className="h-[60vh] flex flex-col">
                          <MessageList messages={messages} tutorId={selectedTutor} />
                          <div className="mt-auto pt-4 pb-6 px-4 bg-[#1C1C1C]">
                            <ChatInput 
                              onSend={handleSendMessage} 
                              isLoading={isLoading} 
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center p-12">
                        <div className="text-center">
                          <GraduationCap className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                          <h3 className="text-xl font-medium text-gray-700 mb-2">Veuillez sélectionner une classe</h3>
                          <p className="text-gray-500">Pour commencer, choisissez une classe dans le menu de gauche</p>
                        </div>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorPage;

