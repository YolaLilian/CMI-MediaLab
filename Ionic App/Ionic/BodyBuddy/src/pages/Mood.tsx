import React, { useEffect } from 'react';
import { IonButton, IonContent, IonImg, IonPage, IonHeader, IonToolbar, IonTitle, withIonLifeCycle, IonText } from "@ionic/react";

import { useHistory } from 'react-router-dom'; 

import UIContext from "../MyContext";

import { logOut } from "../functions";
import './Mood.css';

const Mood: React.FC = () => {

	const history = useHistory();

	async function logout() {
		
		const res = await logOut();
		console.log(res)
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
			{/* <IonHeader>
				<IonToolbar color="quinary">
					<IonTitle className="header__title">
						Mood
					</IonTitle>
				</IonToolbar>
			</IonHeader> */}
			<IonContent>
				{/* <IonText>
					<p>Hier komt informatie over je gemoedstoestand te staan, inclusief dagelijks inspirerende quotes!</p>
				</IonText> */}
				<IonImg className="mood__img" src="../../assets/images/background/mood_lang.png" />
			<IonButton id="logout_button" onClick={ logout } >Log uit</IonButton>				
			</IonContent>
		</IonPage>
	)
}

export default withIonLifeCycle( Mood );