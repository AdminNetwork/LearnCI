
import { Menu, GraduationCap, History, BookOpen, Settings, Key, Calculator, BookText, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onApiKeyChange: (apiKey: string) => void;
}

interface HistoryItem {
  query: string;
  timestamp: number;
}

const Sidebar = ({ isOpen, onToggle, onApiKeyChange }: SidebarProps) => {
  const [apiKey, setApiKey] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    // Charger l'historique depuis le localStorage
    const savedHistory = localStorage.getItem('learningHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newApiKey = e.target.value;
    setApiKey(newApiKey);
    onApiKeyChange(newApiKey);
  };

  // Fonction pour ajouter une nouvelle requête à l'historique
  const addToHistory = (query: string) => {
    const newHistory = [
      { query, timestamp: Date.now() },
      ...history
    ].slice(0, 10); // Garder seulement les 10 dernières requêtes
    
    setHistory(newHistory);
    localStorage.setItem('learningHistory', JSON.stringify(newHistory));
  };

  // Grouper l'historique par période
  const getGroupedHistory = () => {
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const oneWeek = 7 * oneDay;

    const grouped = {
      today: [] as HistoryItem[],
      yesterday: [] as HistoryItem[],
      lastWeek: [] as HistoryItem[],
      older: [] as HistoryItem[],
    };

    history.forEach(item => {
      const diff = now - item.timestamp;
      if (diff < oneDay) {
        grouped.today.push(item);
      } else if (diff < 2 * oneDay) {
        grouped.yesterday.push(item);
      } else if (diff < oneWeek) {
        grouped.lastWeek.push(item);
      } else {
        grouped.older.push(item);
      }
    });

    return grouped;
  };

  const groupedHistory = getGroupedHistory();

  return (
    <div className={cn(
      "fixed top-0 left-0 z-40 h-screen bg-white text-slate-900 transition-all duration-300 shadow-md border-r border-slate-200",
      isOpen ? "w-64" : "w-0"
    )}>
      <nav className="flex h-full w-full flex-col" aria-label="Navigation">
        <div className="flex justify-between items-center h-16 px-4 border-b border-slate-200">
          <button onClick={onToggle} className="p-2 rounded-md hover:bg-slate-100 transition-colors">
            <Menu className="h-5 w-5 text-slate-500" />
          </button>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-cyan-500" />
            <span className="font-bold text-cyan-500">CleverTutor</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          {isOpen && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2 text-slate-500">
                <Key className="h-4 w-4" />
                <span className="text-sm font-medium">Clé API OpenAI</span>
              </div>
              <Input
                type="password"
                placeholder="Entrez votre clé API"
                value={apiKey}
                onChange={handleApiKeyChange}
                className="bg-slate-100 border-slate-200 text-slate-900 placeholder-slate-400"
              />
            </div>
          )}

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3 text-slate-500 font-medium px-2">
                <Home className="h-4 w-4" />
                <span>Navigation</span>
              </div>
              <div className="space-y-1">
                <Link to="/" className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 transition-colors block">
                  Accueil
                </Link>
                <Link to="/cours" className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 transition-colors block">
                  Cours
                </Link>
                <Link to="/exercices" className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 transition-colors block">
                  Exercices
                </Link>
                <Link to="/progres" className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 transition-colors block">
                  Progrès
                </Link>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3 text-slate-500 font-medium px-2">
                <BookOpen className="h-4 w-4" />
                <span>Matières</span>
              </div>
              <div className="space-y-1">
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span>Mathématiques</span>
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Français</span>
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>Sciences</span>
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span>Histoire-Géo</span>
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3 text-slate-500 font-medium px-2">
                <History className="h-4 w-4" />
                <span>Historique récent</span>
              </div>
              
              {Object.entries(groupedHistory).map(([period, items]) => items.length > 0 && (
                <div key={period} className="mb-2">
                  <div className="px-2 py-1 text-xs text-slate-400 capitalize">
                    {period.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </div>
                  {items.map((item, index) => (
                    <div key={index} className="group flex items-center px-3 py-2 hover:bg-slate-100 rounded-md cursor-pointer text-sm">
                      <span className="truncate text-slate-600">{item.query}</span>
                    </div>
                  ))}
                </div>
              ))}
              
              {history.length === 0 && (
                <div className="text-sm text-slate-400 px-3 py-2">
                  Votre historique de questions apparaîtra ici.
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3 text-slate-500 font-medium px-2">
                <Settings className="h-4 w-4" />
                <span>Paramètres</span>
              </div>
              <div className="space-y-1">
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-sm">
                  Profil d'apprentissage
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 transition-colors text-sm">
                  Préférences
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Mode éducatif actif</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
