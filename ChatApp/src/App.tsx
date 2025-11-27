import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { chatbubblesOutline, compassOutline, settingsOutline } from 'ionicons/icons';

import ChatsTab from './pages/ChatsTab';
import ChatScreen from './pages/ChatScreen';
import ExploreTab from './pages/ExploreTab';
import SettingsTab from './pages/SettingsTab';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/chats">
            <ChatsTab />
          </Route>
          <Route path="/chats/:id">
            <ChatScreen />
          </Route>
          <Route exact path="/explore">
            <ExploreTab />
          </Route>
          <Route exact path="/settings">
            <SettingsTab />
          </Route>
          <Route exact path="/">
            <Redirect to="/chats" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="chats" href="/chats">
            <IonIcon icon={chatbubblesOutline} />
            <IonLabel>Chats</IonLabel>
          </IonTabButton>
          <IonTabButton tab="explore" href="/explore">
            <IonIcon icon={compassOutline} />
            <IonLabel>Explore</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settingsOutline} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
