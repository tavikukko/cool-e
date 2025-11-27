import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons,
  IonBackButton,
  IonFooter,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/react';
import { sendOutline } from 'ionicons/icons';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const initialMessages: Message[] = [
  { id: '1', text: 'Hello! How can I help you today?', sender: 'assistant', timestamp: new Date() },
  { id: '2', text: 'I need help with my React project.', sender: 'user', timestamp: new Date() },
  { id: '3', text: 'Of course! I\'d be happy to help with your React project. What specific aspect would you like assistance with? Are you working on components, state management, routing, or something else?', sender: 'assistant', timestamp: new Date() },
  { id: '4', text: 'I\'m trying to understand how to use hooks properly.', sender: 'user', timestamp: new Date() },
  { id: '5', text: 'React Hooks are a powerful feature that let you use state and other React features in functional components. The most commonly used hooks are useState for managing state, useEffect for side effects, and useRef for accessing DOM elements. Would you like me to explain any specific hook in detail?', sender: 'assistant', timestamp: new Date() },
];

const ChatScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const contentRef = useRef<HTMLIonContentElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    contentRef.current?.scrollToBottom(300);
  };

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: crypto.randomUUID(),
        text: inputText,
        sender: 'user',
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputText('');

      // Simulate assistant response
      setTimeout(() => {
        const assistantMessage: Message = {
          id: crypto.randomUUID(),
          text: 'Thank you for your message. I\'m here to help!',
          sender: 'assistant',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/chats" />
          </IonButtons>
          <IonTitle>Chat {id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} fullscreen>
        <div className="messages-container">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={message.sender === 'user' ? 'user-bubble' : 'assistant-bubble'}
            >
              {message.text}
            </div>
          ))}
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar style={{ padding: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IonInput
              value={inputText}
              placeholder="Type a message..."
              onIonInput={(e) => setInputText(e.detail.value || '')}
              onKeyPress={handleKeyPress}
              style={{ 
                '--background': '#1f2933',
                '--color': '#ffffff',
                '--placeholder-color': '#8e8ea0',
                borderRadius: '20px',
                padding: '0 16px',
                flex: 1
              }}
            />
            <IonButton 
              onClick={handleSend} 
              disabled={!inputText.trim()}
              style={{ '--background': '#10a37f', '--border-radius': '50%' }}
            >
              <IonIcon icon={sendOutline} />
            </IonButton>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ChatScreen;
