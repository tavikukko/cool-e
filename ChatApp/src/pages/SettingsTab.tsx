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
  IonIcon,
  IonToggle
} from '@ionic/react';
import { 
  personCircleOutline, 
  notificationsOutline, 
  moonOutline,
  helpCircleOutline,
  informationCircleOutline
} from 'ionicons/icons';

const SettingsTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonIcon icon={personCircleOutline} slot="start" style={{ color: '#10a37f' }} />
            <IonLabel>
              <h2 style={{ color: '#ffffff' }}>Account</h2>
              <p style={{ color: '#8e8ea0' }}>Manage your profile</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={notificationsOutline} slot="start" style={{ color: '#10a37f' }} />
            <IonLabel>
              <h2 style={{ color: '#ffffff' }}>Notifications</h2>
              <p style={{ color: '#8e8ea0' }}>Configure alerts</p>
            </IonLabel>
            <IonToggle slot="end" checked={true} />
          </IonItem>
          <IonItem>
            <IonIcon icon={moonOutline} slot="start" style={{ color: '#10a37f' }} />
            <IonLabel>
              <h2 style={{ color: '#ffffff' }}>Dark Mode</h2>
              <p style={{ color: '#8e8ea0' }}>Always on</p>
            </IonLabel>
            <IonToggle slot="end" checked={true} disabled />
          </IonItem>
          <IonItem>
            <IonIcon icon={helpCircleOutline} slot="start" style={{ color: '#10a37f' }} />
            <IonLabel>
              <h2 style={{ color: '#ffffff' }}>Help & Support</h2>
              <p style={{ color: '#8e8ea0' }}>Get assistance</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={informationCircleOutline} slot="start" style={{ color: '#10a37f' }} />
            <IonLabel>
              <h2 style={{ color: '#ffffff' }}>About</h2>
              <p style={{ color: '#8e8ea0' }}>Version 1.0.0</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SettingsTab;
