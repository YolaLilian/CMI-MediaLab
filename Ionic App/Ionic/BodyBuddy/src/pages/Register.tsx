import { IonPage, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonTitle, IonLabel, IonInput, IonButton, } from '@ionic/react';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { toast } from '../components/Toast';

import { registerUser } from '../functions';

const Register: React.FC = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confPassword, setConfPassword] = useState('');

	async function register() {
		
		if ( password !== confPassword ) {
			toast("Passwords do not match!");
			return;
		};

		if ( email.trim() === '' || password.trim() === '' ) {
			toast("Email and password cannot be empty!");
		};

		const res = await registerUser( email, password )
	}

	return(
		<IonPage>
			<IonHeader>
				<IonToolbar color="quinary">
					<IonTitle class="header__title">
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