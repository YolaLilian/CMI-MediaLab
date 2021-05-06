import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonInput, IonButton, IonLabel, IonList, IonItem, } from '@ionic/react';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function loginUser() {
		console.log(username, password);
	}

	return(
		<IonPage>
			<IonHeader>
				<IonToolbar color="quinary">
					<IonTitle class="header__title">
						Log in
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
						<IonInput type="password" onIonChange={ ( e:any ) => setPassword( e.target.value ) }></IonInput>
					</IonItem>
					<IonItem>
						<IonButton onClick={ loginUser }>Log in</IonButton>
					</IonItem>
					<IonItem>
						<p>Nog geen account? <Link to="/register">Maak een account aan!</Link></p>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	)
}

export default Login;