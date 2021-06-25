import React, { useEffect } from 'react';

import { IonButton, IonContent, IonImg, IonPage, IonHeader, IonToolbar, IonTitle } from "@ionic/react";

import { useHistory } from 'react-router-dom';

import UIContext from "../MyContext";

import { logOut } from "../functions";

const Home: React.FC = () => {

	const { setShowTabs } = React.useContext( UIContext );

	const history = useHistory();

	async function logout() {
		
		const res = await logOut();
		console.log(res)
		history.push("/login");
		
	}

	useEffect( () => {
		setShowTabs( true );

		return () => {
			setShowTabs( false );
		};
	} );
	
	return(
		<IonPage>
			{/* <IonHeader>
				<IonToolbar color="quinary">
				<IonTitle className="header__title">For Me</IonTitle>
				</IonToolbar>
			</IonHeader> */}
			<IonContent>
			<IonImg className="mood__img" src="../../assets/images/background/forme_lang.png" />
			<IonButton id="logout_button" onClick={ logout } >Log uit</IonButton>				
			</IonContent>
		</IonPage>
	)
}

export default Home;