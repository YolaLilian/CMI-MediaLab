import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonTitle, IonLabel, IonInput, IonButton, IonDatetime, IonImg } from '@ionic/react';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { toast } from '../components/Toast';

import { handleRegistrationAndLogin } from '../functions';
import UIContext from "../MyContext";

import './Register.css';

const Register: React.FC = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confPassword, setConfPassword] = useState('');
	const [name, setName] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [residence, setResidence] = useState('');

	async function register() {

		if (password !== confPassword) {
			toast("Passwords do not match!");
			return;
		};

		if (email.trim() === '' || password.trim() === '') {
			toast("Email and password cannot be empty!");
		};

		const res = await handleRegistrationAndLogin( email, password, name, dateOfBirth, residence )
	}

	const { setShowTabs } = React.useContext( UIContext );
	useEffect( () => {
		setShowTabs( false );

		return () => {
			setShowTabs( true );
		};
	} );

	return(
		<IonPage>
			<IonContent>
				<p id="header__tekst">Van BMI naar Mindfull me</p>
				<IonImg className="regscreen__char" src="../../assets/images/background/MyndLogo.png" />
				<IonList>
					<IonItem lines="none">
						<IonLabel position="stacked">Emailadres</IonLabel>
						<IonInput className="input__register" type="text" onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
					</IonItem>
					<IonItem lines="none">
						<IonLabel position="stacked">Wachtwoord</IonLabel>
						<IonInput className="input__register" type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
					</IonItem>
					<IonItem className="ww__Padding" lines="none">
						<IonLabel position="stacked">Bevestig wachtwoord</IonLabel>
						<IonInput className="input__register" type="password" onIonChange={(e: any) => setConfPassword(e.target.value)}></IonInput>
					</IonItem>
					<IonItem lines="none">
						<IonLabel position="stacked">Uw naam</IonLabel>
						<IonInput className="input__register" type="text" onIonChange={ ( e:any ) => setName( e.target.value ) }></IonInput>
					</IonItem>
					<IonItem lines="none">
						<IonLabel position="stacked">Geboortedatum</IonLabel>
						<IonDatetime className="input__register" displayFormat="DD M YYYY" onIonChange={ ( e:any ) => setDateOfBirth( e.target.value.split( "T" )[0] ) }></IonDatetime>
					</IonItem>
					<IonItem lines="none">
						<IonLabel position="stacked">Woonplaats</IonLabel>
						<IonInput className="input__register" type="text" onIonChange={ ( e:any ) => setResidence( e.target.value ) }></IonInput>
					</IonItem>
					<IonItem lines="none">
						<IonButton id="reg__button" color="medium" onClick={register}>Registreer!</IonButton>
					</IonItem>
					<p id="registreer">Al een account? <Link to="/login">Log in!</Link></p>
				</IonList>
			</IonContent>
		</IonPage>
	)
}

export default Register;