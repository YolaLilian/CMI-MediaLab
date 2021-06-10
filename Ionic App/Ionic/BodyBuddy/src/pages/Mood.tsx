import React, { useEffect } from 'react';
import { IonButton, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol,  withIonLifeCycle } from "@ionic/react";

import { useHistory } from 'react-router-dom'; 

import UIContext from "../MyContext";

import { logOut } from "../functions";

const Mood: React.FC = () => {

	const history = useHistory();

	async function logout() {
		
		const res = await logOut();
		history.push("/login");
		
	}

	const { setShowTabs } = React.useContext( UIContext );

	useEffect( () => {
		setShowTabs( true );

		return () => {
			setShowTabs( false );
		};
	} );

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
			<IonButton id="logout_button" onClick={ logout } >Log uit</IonButton>				
			</IonContent>
		</IonPage>
	)
}

export default withIonLifeCycle( Mood );