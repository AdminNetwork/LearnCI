
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SQLInput from '@/components/SQLInput';
import APIKeyInput from '@/components/APIKeyInput';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Sidebar from '@/components/Sidebar';

const SQLTranslator = () => {
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { toast } = useToast();

  const handleTranslate = async (query: string) => {
    if (!apiKey) {
      toast({
        title: "Erreur",
        description: "Veuillez d'abord configurer votre clé API OpenAI",
        variant: "destructive",
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
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'Vous êtes un expert en SQL et Qlik qui traduit les requêtes en langage métier clair et précis, adapté aux utilisateurs fonctionnels de JD Edwards. Concentrez-vous sur l\'explication des objectifs business de la requête plutôt que sur les détails techniques.'
            },
            {
              role: 'user',
              content: `Traduisez cette requête en langage métier :\n\n${query}`
            }
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Erreur lors de la traduction');
      }

      const data = await response.json();
      setTranslation(data.choices[0].message.content);
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

  return (
    <div className="flex h-screen">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        onApiKeyChange={setApiKey}
      />
      
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} p-4`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Link to="/" className="flex items-center text-gray-400 hover:text-white mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour
            </Link>
            <h1 className="text-2xl font-bold">
              Interprète Métier Dehon
            </h1>
          </div>
          
          <div className="grid gap-8">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Configuration</h2>
              <APIKeyInput onSubmit={setApiKey} />
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Requête SQL/Qlik</h2>
              <SQLInput onTranslate={handleTranslate} isLoading={isLoading} />
            </Card>

            {translation && (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Traduction en Langage Métier</h2>
                <div className="prose prose-invert max-w-none">
                  {translation}
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SQLTranslator;
