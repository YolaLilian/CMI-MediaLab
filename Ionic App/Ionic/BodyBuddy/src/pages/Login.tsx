import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonInput, IonButton, IonLabel, IonList, IonItem, IonImg } from '@ionic/react';

import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';

const Login: React.FC = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function loginUser() {
		console.log(username, password);
	}

	return (
		<IonPage class="login_body">
			<IonHeader>
				<IonToolbar color="quinary">
					<IonTitle class="header__title">
						Log in
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent class="background">
				<IonImg class="loginscreen_char" src="../../assets/images/background/loginscreen_char.png" />
				<h1 id="login">Login</h1>
				<IonList id="login_list">
					<IonItem>
						<IonLabel position="stacked">Gebruikersnaam</IonLabel>
						<IonInput type="text" onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
					</IonItem>
					<IonItem>
						<IonLabel position="stacked">Wachtwoord</IonLabel>
						<IonInput type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
					</IonItem>
				</IonList>
				<p id="registreren">Nog geen account? <Link to="/register">Maak een account aan!</Link></p>
				<IonButton id="login_button" onClick={loginUser}>Log in</IonButton>
			</IonContent>
		</IonPage>
	)
}

export default Login;