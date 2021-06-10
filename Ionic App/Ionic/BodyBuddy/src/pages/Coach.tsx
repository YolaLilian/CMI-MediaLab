import { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle,IonGrid, IonRow, IonCol } from "@ionic/react";

import { logOut } from "../functions";

const Coach: React.FC = () => {
	
	return(
		<IonPage>
			<IonHeader>
				<IonToolbar color="quinary">
					<IonTitle className="header__title">
						Coach
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>				
			</IonContent>
		</IonPage>
	)
}

export default Coach;