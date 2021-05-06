import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { fish, basketball, add, person, heart } from 'ionicons/icons';
import Recipes from './pages/Recipes'
import Workouts from './pages/Workouts';
import User from './pages/User';
import Buddy from './pages/Buddy';

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
          <Route exact path="/recipes">
            <Recipes />
          </Route>
          <Route exact path="/workouts">
            <Workouts />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/buddy">
            <Buddy />
          </Route>
          <Route exact path="/">
            <Redirect to="/recipes" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar color="primary" slot="bottom">
          <IonTabButton tab="recipes" href="/recipes">
            <IonIcon icon={fish} />
          </IonTabButton>
          <IonTabButton tab="workouts" href="/Workouts">
            <IonIcon icon={basketball} />
          </IonTabButton>
          <IonTabButton tab="filters" href="">
            <IonIcon icon={add} />
          </IonTabButton>
          <IonTabButton tab="user" href="/User">
            <IonIcon icon={person} />
          </IonTabButton>
          <IonTabButton tab="buddy" href="/Buddy">
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
