
import { tutors } from './Avatar';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface MessageAvatarProps {
  isAssistant: boolean;
  tutorId?: string;
}

const MessageAvatar = ({ isAssistant, tutorId = 'yeo' }: MessageAvatarProps) => {
  if (isAssistant) {
    // Find the tutor by ID
    const currentTutor = tutors.find(t => t.id === tutorId) || tutors[0];
    
    return (
      <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white shadow-md">
        <Avatar className="h-full w-full">
          <AvatarImage 
            src={currentTutor.avatarUrl} 
            alt={`Avatar de ${currentTutor.name}`} 
            className="h-full w-full object-cover"
          />
          <AvatarFallback className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-sm font-bold">
            {currentTutor.name.substring(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>
    );
  }
  
  return (
    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white shadow-md">
      <span className="text-sm font-semibold">Moi</span>
    </div>
  );
};

export default MessageAvatar;
