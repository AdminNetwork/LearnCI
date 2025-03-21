
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface SQLInputProps {
  onTranslate: (query: string) => Promise<void>;
  isLoading: boolean;
}

const SQLInput = ({ onTranslate, isLoading }: SQLInputProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async () => {
    if (query.trim()) {
      await onTranslate(query);
    }
  };

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Entrez votre requête SQL ou Qlik ici..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="min-h-[200px] font-mono"
      />
      <Button 
        onClick={handleSubmit}
        disabled={isLoading || !query.trim()}
        className="w-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Traduction en cours...
          </>
        ) : (
          'Traduire en langage métier'
        )}
      </Button>
    </div>
  );
};

export default SQLInput;
