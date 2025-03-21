
import Message from './Message';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const MessageList = ({ messages, tutorId = 'yeo' }: { messages: Message[], tutorId?: string }) => {
  if (!messages || messages.length === 0) {
    return null;
  }
  
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="w-full max-w-3xl mx-auto px-4">
        {messages.map((message, index) => (
          <Message key={index} {...message} tutorId={tutorId} />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
