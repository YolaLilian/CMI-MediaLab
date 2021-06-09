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
import { restaurant, home, person, heart, barbell } from 'ionicons/icons';

import { ProtectedRoute } from './components/ProtectedRoute';

import Recipes from './pages/Recipes'
import Workouts from './pages/Workouts';
import User from './pages/User';
import Buddy from './pages/Buddy';
import Login from './pages/Login';
import Register from './pages/Register';
import Mood from './pages/Mood';

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

export default function App() {
  // If we need some JS logic, we can do that here.
  //If so, we need to change the bracket to a curly bracket and add a return to the ionic components
// const App: React.FC = () => {

	return (
		<IonApp>
			<IonReactRouter>
				<IonTabs>
					<IonRouterOutlet>
						<Route exact path="/">
							<Redirect to="/login" />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<ProtectedRoute exact path="/mood" component={Mood}/>
						<ProtectedRoute exact path="/recipes" component= {Recipes} />
						<ProtectedRoute exact path="/workouts" component={Workouts} />
						<ProtectedRoute exact path="/user" component={User}/>
						<ProtectedRoute exact path="/buddy" component={Buddy}/>
					</IonRouterOutlet>
					<IonTabBar color="primary" slot="bottom">
						<IonTabButton tab="recipes" href="/recipes">
							<IonIcon icon={restaurant} />
						</IonTabButton>
						<IonTabButton tab="workouts" href="/workouts">
							<IonIcon icon={barbell} />
						</IonTabButton>
						<IonTabButton tab="mood" href="/mood">
							<IonIcon icon={home} />
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
	)
// );
};

// export default App;
