import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';
import { sparklesOutline, rocketOutline, bulbOutline, codeOutline } from 'ionicons/icons';

const categories = [
  { icon: sparklesOutline, title: 'Creative Writing', description: 'Get help with stories, poems, and more' },
  { icon: codeOutline, title: 'Coding Help', description: 'Debug code and learn new concepts' },
  { icon: bulbOutline, title: 'Brainstorming', description: 'Generate ideas for any project' },
  { icon: rocketOutline, title: 'Productivity', description: 'Boost your workflow efficiency' },
];

const ExploreTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Explore</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Explore</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ padding: '16px' }}>
          <IonCard style={{ background: '#1f2933', margin: '0 0 16px 0' }}>
            <IonCardHeader>
              <IonCardTitle style={{ color: '#ffffff' }}>Discover What's Possible</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{ color: '#8e8ea0' }}>
              Explore different ways to use ChatApp to enhance your productivity and creativity.
            </IonCardContent>
          </IonCard>
          <IonList>
            {categories.map((category, index) => (
              <IonItem key={index} button detail>
                <IonIcon 
                  icon={category.icon} 
                  slot="start" 
                  style={{ color: '#10a37f', fontSize: '24px' }} 
                />
                <IonLabel>
                  <h2 style={{ color: '#ffffff' }}>{category.title}</h2>
                  <p style={{ color: '#8e8ea0' }}>{category.description}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ExploreTab;
