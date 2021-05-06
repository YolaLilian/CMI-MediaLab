import { IonPage, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonTitle, IonLabel, IonInput, IonButton, } from '@ionic/react';

const Register: React.FC = () => {
	return(
		<IonPage>
			<IonHeader>
				<IonToolbar color="quinary">
					<IonTitle class="header__title">
						Registreer
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
						<IonButton>Registreer!</IonButton>
					</IonItem>
				</IonList>
			</IonContent>
	</IonPage>
	)
}

export default Register;