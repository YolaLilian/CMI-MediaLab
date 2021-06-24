import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonIcon,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	IonImg,
	IonFab,
	IonFabButton,
	IonFabList,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { restaurant, home, person, heart, barbell } from 'ionicons/icons';

import { ProtectedRoute } from './components/ProtectedRoute';

import Recipes from './pages/Recipes';
import { Recipe } from './pages/Recipe';
import Workouts from './pages/Workouts';
import User from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Mood from './pages/Mood';
import Coach from './pages/Coach';

import UIContext from "./MyContext";

import './App.css'

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

	const { showTabs } = React.useContext(UIContext);

	let tabbarStyle = showTabs ? undefined : { display: "none" }

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
						<ProtectedRoute exact path="/recipes/:recipeId" component={Recipe} />
						<ProtectedRoute exact path="/workouts" component={Workouts} />
						<ProtectedRoute exact path="/user" component={User} />
						<ProtectedRoute exact path="/coach" component={Coach} />
					</IonRouterOutlet>
					<IonTabBar color="primary" slot="bottom" style={tabbarStyle}>
						<IonTabButton tab="recipes" href="/recipes">
							<IonIcon icon={restaurant} />
						</IonTabButton>
						<IonTabButton tab="workouts" href="/workouts">
							<IonIcon icon={barbell} />
						</IonTabButton>
						<IonTabButton tab="mood" href="/mood">
							{/* <IonIcon icon={home} /> */}
						</IonTabButton>
						<IonTabButton tab="coach" href="/coach">
							<IonIcon icon={person} />
						</IonTabButton>
						<IonTabButton tab="user" href="/user">
							{/* <IonIcon icon={heart} /> */}
							<IonImg className="menu__picture" src="../../assets/images/background/profile_picture.png" />
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
				<IonFab className="fab" vertical="bottom" slot="fixed" style={tabbarStyle}>
					<IonFabButton href="/mood">
					<IonIcon className="profile__icon" icon={home} />
					</IonFabButton>
				</IonFab>
			</IonReactRouter>
		</IonApp>
	)
};