import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { restaurant, basketball, add, person, heart, barbell } from 'ionicons/icons';
import Recipes from './pages/Recipes'
import Workouts from './pages/Workouts';
import User from './pages/User';
import Buddy from './pages/Buddy';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AdditionalRegistration from './pages/AdditionalRegistration';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './pages/style.css';

const App: React.FC = () => (
  // If we need some JS logic, we can do that here.
  //If so, we need to change the bracket to a curly bracket and add a return to the ionic components
// const App: React.FC = () => {

  // return (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
		  <Route exact path="/additionalregistration">
            <AdditionalRegistration />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/recipes">
            <Recipes />
          </Route>
          <Route exact path="/workouts">
            <Workouts />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
          <Route exact path="/buddy">
            <Buddy />
          </Route>
        </IonRouterOutlet>
        <IonTabBar color="primary" slot="bottom">
          <IonTabButton tab="recipes" href="/recipes">
            <IonIcon icon={restaurant} />
          </IonTabButton>
          <IonTabButton tab="workouts" href="/workouts">
            <IonIcon icon={barbell} />
          </IonTabButton>
          <IonTabButton tab="filters" href="">
            <IonIcon icon={add} />
          </IonTabButton>
          <IonTabButton tab="user" href="/user">
            <IonIcon icon={person} />
          </IonTabButton>
          <IonTabButton tab="buddy" href="/buddy">
            <IonIcon icon={heart} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
// )
);
// };

export default App;
