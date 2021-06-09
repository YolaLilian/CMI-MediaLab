import { IonPage, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonImg, IonTitle, IonLabel, IonInput, IonButton, IonDatetime } from '@ionic/react';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { toast } from '../components/Toast';

import { handleRegistrationAndLogin } from '../functions';

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

	return (
		<IonPage>
			<IonContent>
				<p id="header__tekst">Van BMI naar Mindfull me</p>
				<IonImg className="regscreen__char" src="../../assets/images/background/MyndLogo.png" />
				<IonList>
					<IonItem lines="none">
						<IonLabel position="stacked">Emailadres</IonLabel>
					</IonItem>
					<IonItem>	
						<IonInput className="input__register" type="text" onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
					</IonItem>
					<IonItem lines="none">
						<IonLabel position="stacked">Wachtwoord</IonLabel>
					</IonItem>
					<IonItem>
						<IonInput className="input__register" type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
					</IonItem>
					<IonItem className="ww__Padding" lines="none">
						<IonLabel position="stacked">Bevestig wachtwoord</IonLabel>
					</IonItem>
					<IonItem lines="none">
						<IonInput className="input__register" type="password" onIonChange={(e: any) => setConfPassword(e.target.value)}></IonInput>
					</IonItem>
					<IonItem>
						<IonLabel position="floating">Uw naam</IonLabel>
					</IonItem>
					<IonItem>
						<IonInput type="text" onIonChange={ ( e:any ) => setName( e.target.value ) }></IonInput>
					</IonItem>
					<IonItem>
						<IonLabel position="floating">Geboortedatum</IonLabel>
					</IonItem>
					<IonItem>
						<IonDatetime displayFormat="DD M YYYY" onIonChange={ ( e:any ) => setDateOfBirth( e.target.value.split( "T" )[0] ) }></IonDatetime>
					</IonItem>
					<IonItem>
						<IonLabel position="floating">Woonplaats</IonLabel>
					</IonItem>
					<IonItem>
						<IonInput type="text" onIonChange={ ( e:any ) => setResidence( e.target.value ) }></IonInput>
					</IonItem>
					<IonItem lines="none">
						<IonButton color="medium" onClick={register}>Registreer!</IonButton>
					</IonItem>
					<p id="registreer">Al een account? <Link to="/login">Log in!</Link></p>
				</IonList>
			</IonContent>
		</IonPage>
	)
}

export default Register;