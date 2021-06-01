import { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle,IonGrid, IonRow, IonCol } from "@ionic/react";

const Home: React.FC = () => {
	return(
		<IonPage>
			<IonHeader>
				<IonToolbar color="quinary">
					<IonTitle className="header__title">
						Home
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonGrid className="ion-text-center">
					<IonRow>
						<IonCol>
							<IonButton routerLink="./Login">
								Log in
							</IonButton>
							<IonButton routerLink="./Register">
								Registreren
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
				
			</IonContent>
		</IonPage>
	)
}

export default Home;