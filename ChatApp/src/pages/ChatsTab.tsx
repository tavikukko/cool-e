import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonAvatar,
  IonText
} from '@ionic/react';

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
}

const conversations: Conversation[] = [
  { id: '1', title: 'Project Discussion', lastMessage: 'Let me help you with that code...', timestamp: '10:30 AM' },
  { id: '2', title: 'Recipe Ideas', lastMessage: 'Here are some healthy meal suggestions...', timestamp: 'Yesterday' },
  { id: '3', title: 'Travel Planning', lastMessage: 'I recommend visiting these places...', timestamp: 'Dec 20' },
  { id: '4', title: 'Book Recommendations', lastMessage: 'Based on your interests, you might enjoy...', timestamp: 'Dec 18' },
  { id: '5', title: 'Code Review', lastMessage: 'The implementation looks good, but...', timestamp: 'Dec 15' },
];

const ChatsTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chats</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {conversations.map((conversation) => (
            <IonItem 
              key={conversation.id} 
              routerLink={`/chats/${conversation.id}`}
              detail={true}
            >
              <IonAvatar slot="start" style={{ background: '#10a37f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                  {conversation.title.charAt(0)}
                </span>
              </IonAvatar>
              <IonLabel>
                <h2 style={{ color: '#ffffff' }}>{conversation.title}</h2>
                <p style={{ color: '#8e8ea0' }}>{conversation.lastMessage}</p>
              </IonLabel>
              <IonText slot="end" style={{ color: '#8e8ea0', fontSize: '12px' }}>
                {conversation.timestamp}
              </IonText>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ChatsTab;
