
import { useState, useEffect } from 'react';
import { Avatar as AvatarUI, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { UserCircle2, User, Users, Check, Crown } from 'lucide-react';

interface Tutor {
  id: string;
  name: string;
  gender: 'male' | 'female';
  avatarUrl: string;
  role: string;
}

interface AvatarProps {
  avatarType?: 'teacher' | 'student' | 'scientist';
  size?: 'sm' | 'md' | 'lg';
  onTutorChange?: (tutorId: string) => void;
}

// Liste des tuteurs avec avatars personnalisés
const tutors: Tutor[] = [
  { 
    id: 'yeo', 
    name: 'Prof. Yeo', 
    gender: 'male', 
    avatarUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=yeo&backgroundColor=transparent&skinColor=694d3e&hairColor=222222&hair=fonze&facialHair=noBear&eyesColor=634e34&mouth=smile&eyebrows=up',
    role: 'Mathématiques'
  },
  { 
    id: 'konan', 
    name: 'Prof. Konan', 
    gender: 'male', 
    avatarUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=konan&backgroundColor=transparent&skinColor=694d3e&hairColor=222222&hair=short&facialHair=noBear&eyesColor=634e34&mouth=smile&eyebrows=round',
    role: 'Physique'
  },
  { 
    id: 'yao', 
    name: 'Prof. Yao', 
    gender: 'male', 
    avatarUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=yao&backgroundColor=transparent&skinColor=694d3e&hairColor=222222&hair=shortCombover&facialHair=noBear&eyesColor=634e34&mouth=smile&eyebrows=angry',
    role: 'Histoire-Géo'
  },
  { 
    id: 'zie', 
    name: 'Prof. Zie', 
    gender: 'female', 
    avatarUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=zie&backgroundColor=transparent&skinColor=694d3e&hairColor=222222&hair=bobCut&accessories=glasses&eyesColor=634e34&mouth=smile&eyebrows=up',
    role: 'Français'
  },
  { 
    id: 'ndri', 
    name: 'Prof. N\'Dri', 
    gender: 'female', 
    avatarUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=ndri&backgroundColor=transparent&skinColor=694d3e&hairColor=222222&hair=curly&accessories=glasses&eyesColor=634e34&mouth=smile&eyebrows=eyelashesUp',
    role: 'Sciences'
  },
];

// Export tutors so they can be accessed from other components
export { tutors };

const Avatar = ({ avatarType = 'teacher', size = 'lg', onTutorChange }: AvatarProps) => {
  const [selectedTutor, setSelectedTutor] = useState<string>(tutors[0].id);
  const [hoveredTutor, setHoveredTutor] = useState<string | null>(null);

  const handleTutorChange = (tutorId: string) => {
    setSelectedTutor(tutorId);
    if (onTutorChange) {
      onTutorChange(tutorId);
    }
  };

  // Determine avatar size
  const getAvatarSize = () => {
    switch (size) {
      case 'sm': return 'h-20 w-20';
      case 'md': return 'h-24 w-24';
      case 'lg': return 'h-32 w-32';
      default: return 'h-32 w-32';
    }
  };

  // Get current tutor data
  const getCurrentTutor = () => {
    return tutors.find(t => t.id === selectedTutor) || tutors[0];
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4 text-slate-900 flex items-center justify-center">
        <Crown className="h-5 w-5 text-amber-500 mr-2" />
        Choisissez votre tuteur
      </h2>
      
      <div className="grid grid-cols-5 gap-4 mb-6 max-w-3xl">
        {tutors.map((tutor) => (
          <div 
            key={tutor.id} 
            className={`relative cursor-pointer transition-all duration-300 transform ${
              selectedTutor === tutor.id ? 'scale-110' : 'scale-100'
            } ${
              hoveredTutor === tutor.id ? 'scale-105' : ''
            }`}
            onClick={() => handleTutorChange(tutor.id)}
            onMouseEnter={() => setHoveredTutor(tutor.id)}
            onMouseLeave={() => setHoveredTutor(null)}
          >
            <div className={`
              p-1 rounded-full 
              ${selectedTutor === tutor.id 
                ? 'bg-gradient-to-r from-amber-300 to-amber-500 shadow-lg' 
                : 'bg-gray-100'
              }
              transition-all duration-300
            `}>
              <AvatarUI className="mx-auto border-2 border-white">
                <AvatarImage 
                  src={tutor.avatarUrl} 
                  alt={`Avatar de ${tutor.name}`} 
                  className="transition-all duration-300"
                />
                <AvatarFallback className="bg-cyan-600 text-white text-xs font-bold">
                  {tutor.name.substring(0, 2)}
                </AvatarFallback>
              </AvatarUI>
            </div>
            <div className={`
              text-center text-xs mt-2 font-medium
              ${selectedTutor === tutor.id ? 'text-amber-700' : 'text-gray-600'}
            `}>
              {tutor.name}
            </div>
            {selectedTutor === tutor.id && (
              <div className="absolute -bottom-1 -right-1 bg-amber-400 rounded-full p-1 shadow-sm">
                <Check className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="relative transition-all duration-300">
        <div className="bg-gradient-to-r from-amber-100 to-amber-200 p-3 rounded-full shadow-md">
          <AvatarUI className={`${getAvatarSize()} mx-auto border-4 border-white`}>
            <AvatarImage 
              src={getCurrentTutor().avatarUrl} 
              alt={`Avatar de ${getCurrentTutor().name}`} 
              className="transition-transform duration-300"
            />
            <AvatarFallback className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-lg font-bold">
              {getCurrentTutor().name.substring(0, 2)}
            </AvatarFallback>
          </AvatarUI>
        </div>
      </div>
      
      <div className="mt-2 mb-4">
        <h3 className="text-lg font-medium text-amber-800">{getCurrentTutor().name}</h3>
        <p className="text-sm text-gray-600">{getCurrentTutor().role}</p>
      </div>
    </div>
  );
};

export default Avatar;
