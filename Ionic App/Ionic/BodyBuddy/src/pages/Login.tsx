import React from 'react';

import { IonPage, IonContent, IonInput, IonButton, IonList, IonItem, IonImg, withIonLifeCycle } from '@ionic/react';

import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'; 
import './Login.css';

import { toast } from '../components/Toast';

import { loginUser, logOut } from "../functions";
import UIContext from "../MyContext";

const Login: React.FC = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	async function login() {

		const res = await loginUser( email, password );

		if ( !res ) {
			toast('Login mislukt... Controleer uw gegevens');
		} else {
			toast("U bent succesvol ingelogd!");
			history.push( "/home" )
		};
		
	}
	
	async function logout() {
		
		const res = await logOut();
		console.log(res)
		
	}

	const { setShowTabs } = React.useContext( UIContext );

	useEffect( () => {
		setShowTabs( false );

		return () => {
			setShowTabs( true );
		};
	} );

	return (
		<IonPage className="login__body">
			<IonContent className="background">
				<p id="header__tekst">Van BMI naar Mindfull me</p>
				<IonImg className="loginscreen__char" src="../../assets/images/background/MyndLogo.png" />
				<h1 id="login">Login</h1>
				<IonList id="login__list">
					<IonItem lines="none">
						{/* <IonLabel className="label__tekst" position="stacked">Emailadres</IonLabel> */}
						<IonInput className="input__login" placeholder="Email" type="text" onIonChange={ ( e: any ) => setEmail( e.target.value ) }></IonInput>
					</IonItem>
					<IonItem lines="none">
						{/* <IonLabel className="label__tekst" position="stacked">Wachtwoord</IonLabel> */}
						<IonInput className="input__login" placeholder="Wachtwoord" type="password" onIonChange={ ( e: any ) => setPassword( e.target.value ) }></IonInput>
					</IonItem>
				</IonList>
				<IonButton id="login__button" color="medium" onClick={ login }>Log in</IonButton>
				{/* <IonButton id="logout_button" onClick={ logout }>Log uit</IonButton> */}
				<p id="registreren">Nog geen account? <Link to="/register">Maak een account aan!</Link></p>
			</IonContent>
		</IonPage>
	)
}

export default withIonLifeCycle( Login );