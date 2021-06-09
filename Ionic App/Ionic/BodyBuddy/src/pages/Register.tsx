import { IonPage, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonTitle, IonImg, IonLabel, IonInput, IonButton, } from '@ionic/react';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { toast } from '../components/Toast';

import { registerUser } from '../functions';

import './Register.css';

const Register: React.FC = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confPassword, setConfPassword] = useState('');

	async function register() {

		if (password !== confPassword) {
			toast("Passwords do not match!");
			return;
		};

		if (email.trim() === '' || password.trim() === '') {
			toast("Email and password cannot be empty!");
		};

		const res = await registerUser(email, password)
	}

	return (
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
					</IonItem>
					<IonItem lines="none">
						<IonInput className="input__register" type="password" onIonChange={(e: any) => setConfPassword(e.target.value)}></IonInput>
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