import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {  home, informationCircle, calculator, closeCircle } from 'ionicons/icons'; // Import necessary icons
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Tab2 from './pages/Click_counter';
import Tab3 from './pages/Calculator';
import ToDoList from './pages/ToDoList';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route exact path="/Click_counter">
            <Tab2 />
          </Route>
          <Route exact path="/Calculator">
            <Tab3 />
            </Route>
          <Route exact path="/ToDoList">
            <ToDoList />
          </Route>
          <Route exact path="null">
          </Route>
          
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton>
            <IonIcon aria-hidden="true" icon={closeCircle} /> 
            <IonLabel>Blank</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon aria-hidden="true" icon={informationCircle} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
