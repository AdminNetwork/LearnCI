
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Key } from 'lucide-react';

interface APIKeyInputProps {
  onSubmit: (apiKey: string) => void;
}

const APIKeyInput = ({ onSubmit }: APIKeyInputProps) => {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = () => {
    if (apiKey.trim()) {
      onSubmit(apiKey.trim());
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Key className="h-4 w-4" />
        <span className="text-sm font-medium">Clé API OpenAI</span>
      </div>
      <div className="flex gap-2">
        <Input
          type="password"
          placeholder="Entrez votre clé API OpenAI..."
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSubmit} disabled={!apiKey.trim()}>
          Valider
        </Button>
      </div>
    </div>
  );
};

export default APIKeyInput;
