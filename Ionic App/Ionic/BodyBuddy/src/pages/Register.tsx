import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonTitle, IonLabel, IonInput, IonButton, IonDatetime } from '@ionic/react';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { toast } from '../components/Toast';

import { handleRegistrationAndLogin } from '../functions';
import UIContext from "../MyContext";

const Register: React.FC = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confPassword, setConfPassword] = useState('');
	const [name, setName] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [residence, setResidence] = useState('');

	async function register() {
		
		if ( password !== confPassword ) {
			toast("Passwords do not match!");
			return;
		};

		if ( email.trim() === '' || password.trim() === '' ) {
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
			<IonHeader>
				<IonToolbar color="quinary">
					<IonTitle className="header__title">
						Registreren
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					<IonItem>
						<IonLabel position="floating">Emailadres</IonLabel>
						<IonInput type="text" onIonChange={ ( e:any ) => setEmail( e.target.value ) }></IonInput>	
					</IonItem>
					<IonItem>
						<IonLabel position="floating">Wachtwoord</IonLabel>
						<IonInput type="password"  onIonChange={ ( e:any ) => setPassword( e.target.value ) }></IonInput>
					</IonItem>
					<IonItem>
						<IonLabel position="floating">Bevestig wachtwoord</IonLabel>
						<IonInput type="password"  onIonChange={ ( e:any ) => setConfPassword( e.target.value ) }></IonInput>
					</IonItem>
					<IonItem>
						<IonLabel position="floating">Uw naam</IonLabel>
						<IonInput type="text" onIonChange={ ( e:any ) => setName( e.target.value ) }></IonInput>
					</IonItem>
					<IonItem>
						<IonLabel position="floating">Geboortedatum</IonLabel>
						<IonDatetime displayFormat="DD M YYYY" onIonChange={ ( e:any ) => setDateOfBirth( e.target.value.split( "T" )[0] ) }></IonDatetime>
					</IonItem>
					<IonItem>
						<IonLabel position="floating">Woonplaats</IonLabel>
						<IonInput type="text" onIonChange={ ( e:any ) => setResidence( e.target.value ) }></IonInput>
					</IonItem>
					<IonItem>
						<IonButton onClick={ register }>Registreer!</IonButton>
					</IonItem>
					<IonItem>
						<p>Al een account? <Link to="/login">Log in!</Link></p>
					</IonItem>
				</IonList>
			</IonContent>
	</IonPage>
	)
}

export default Register;