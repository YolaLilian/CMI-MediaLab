import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonInput, IonButton, IonLabel, IonList, IonItem, } from '@ionic/react';

const Login: React.FC = () => {
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
						<IonInput type="text"></IonInput>	
					</IonItem>
					<IonItem>
						<IonLabel position="floating">Wachtwoord</IonLabel>
						<IonInput type="password"></IonInput>
					</IonItem>
					<IonItem>
						<IonButton>Log in</IonButton>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	)
}

export default Login;