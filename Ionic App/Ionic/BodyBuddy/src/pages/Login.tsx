import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonInput, IonButton, IonLabel, IonList, IonItem, IonImg } from '@ionic/react';

import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';

import { toast } from '../components/Toast';

import { loginUser } from "../functions";

const Login: React.FC = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function login() {

		const res = await loginUser( email, password );

		if ( !res ) {
			toast('Login mislukt... Controleer uw gegevens');
		} else {
			toast("U bent succesvol ingelogd!");
		};
	}

	return (
		<IonPage className="login__body">
		
			<IonContent className="background">
				<p id="header__tekst">Van BMI naar Mindfull me</p>
				<IonImg className="loginscreen__char" src="../../assets/images/background/MyndLogo.png" />
				<h1 id="login">Login</h1>
				<IonList id="login__list">
					<IonItem lines="none">
						<IonLabel position="stacked">Emailadres</IonLabel>
						<IonInput className="input__login" type="text" onIonChange={ ( e: any ) => setEmail( e.target.value ) }></IonInput>
					</IonItem>
					<IonItem lines="none">
						<IonLabel position="stacked">Wachtwoord</IonLabel>
						<IonInput className="input__login" type="password" onIonChange={ ( e: any ) => setPassword( e.target.value ) }></IonInput>
					</IonItem>
				</IonList>
				<p id="registreren">Nog geen account? <Link to="/register">Maak een account aan!</Link></p>
				<IonButton id="login__button" color="medium" onClick={ login }>Log in</IonButton>
			</IonContent>
		</IonPage>
	)
}

export default Login;