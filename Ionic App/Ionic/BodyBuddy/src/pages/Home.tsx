import { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle,IonGrid, IonRow, IonCol } from "@ionic/react";

const Home: React.FC = () => {
	return(
		<IonPage>
			<IonHeader>
				<IonToolbar color="quinary">
					<IonTitle class="header__title">
						Home
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonButton routerLink="./Login">
					Log in
				</IonButton>
				<IonButton routerLink="./Register">
					Registreer
				</IonButton>
			</IonContent>
		</IonPage>
	)
}

export default Home;