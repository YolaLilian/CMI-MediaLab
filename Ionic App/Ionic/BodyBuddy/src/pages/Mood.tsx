import { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle,IonGrid, IonRow, IonCol } from "@ionic/react";

import { logOut } from "../functions";

const Mood: React.FC = () => {

	async function logout() {
		
		const res = await logOut();
		
	}
	
	return(
		<IonPage>
			<IonHeader>
				<IonToolbar color="quinary">
					<IonTitle className="header__title">
						Mood
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
			<IonButton id="logout_button" onClick={ logout } routerLink="/login" >Log uit</IonButton>				
			</IonContent>
		</IonPage>
	)
}

export default Mood;