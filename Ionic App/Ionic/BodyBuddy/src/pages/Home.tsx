import React from 'react';

import { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from "@ionic/react";

import { useHistory } from 'react-router-dom'; 

import { logOut } from "../functions";

const Home: React.FC = () => {

	const history = useHistory();

	async function logout() {
		
		const res = await logOut();
		console.log(res)
		history.push("/login");
		
	}
	
	return(
		<IonPage>
			<IonHeader>
				<IonToolbar color="quinary">
				<IonTitle className="header__title">For Me</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
			<IonButton id="logout_button" onClick={ logout } >Log uit</IonButton>				
			</IonContent>
		</IonPage>
	)
}

export default Home;