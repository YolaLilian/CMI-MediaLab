import { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from "@ionic/react";

import { logOut } from "../functions";

const Home: React.FC = () => {

	async function logout() {
		
		const res = await logOut();
		
	}
	
	return(
		<IonPage>
			<IonHeader>
				<IonToolbar color="quinary">
					<IonTitle className="header__title">
						Home
					</IonTitle>
				</IonToolbar>
			</IonHeader>
		</IonPage>
	)
}

export default Home;