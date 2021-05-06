import { IonPage, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonTitle, IonLabel, IonInput, IonButton, } from '@ionic/react';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confPassword, setConfPassword] = useState('');

	function registerUser() {
		console.log(username, password);
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
						<IonLabel position="floating">Gebruikersnaam</IonLabel>
						<IonInput type="text" onIonChange={ ( e:any ) => setUsername( e.target.value ) }></IonInput>	
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
						<IonButton onClick={ registerUser }>Registreer!</IonButton>
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