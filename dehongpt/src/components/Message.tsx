
import MessageAvatar from './MessageAvatar';
import MessageActions from './MessageActions';

type MessageProps = {
  role: 'user' | 'assistant';
  content: string;
  tutorId?: string; // Added tutorId prop to display the correct tutor avatar
};

const Message = ({ role, content, tutorId = 'yeo' }: MessageProps) => {
  return (
    <div className="py-6">
      <div className={`flex gap-4 ${role === 'user' ? 'flex-row-reverse' : ''}`}>
        <MessageAvatar isAssistant={role === 'assistant'} tutorId={tutorId} />
        <div className={`flex-1 space-y-2 ${role === 'user' ? 'flex flex-col items-end' : ''}`}>
          <div className={`${role === 'user' 
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-[20px] rounded-tr-sm px-4 py-3 inline-block max-w-[80%]' 
            : 'bg-gray-100 rounded-[20px] rounded-tl-sm px-4 py-3 inline-block max-w-[80%]'}`}>
            {content}
          </div>
          {role === 'assistant' && <MessageActions />}
        </div>
      </div>
    </div>
  );
};

export default Message;
