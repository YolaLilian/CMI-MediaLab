import React, { useState } from 'react';
import { IonButton, IonContent, IonPage, IonHeader, IonAlert, IonToolbar, IonTitle, IonGrid, IonRow, IonCol } from "@ionic/react";

import { logOut } from "../functions";

const User: React.FC = () => {
	const [showAlert, setShowAlert] = useState(true);
	return(
		<IonPage>
			<IonHeader>
				<IonToolbar color="quinary">
					<IonTitle className="header__title">
						Profiel
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
			<IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Hoe voel je je vandaag?'}
          inputs={[
            {
              name: 'blij',
              cssClass: 'alert__text',
              type: 'radio',
              label: 'Blij',
              value: 'Blij',
            },
            {
              name: 'stabiel',
              cssClass: 'alert__text',
              type: 'radio',
              label: 'Stabiel',
              value: 'Stabiel',
            },
            {
              name: 'boos',
              cssClass: 'alert__text',
              type: 'radio',
              label: 'Boos',
              value: 'Boos',
            }
          ]}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            },
            {
              text: 'Ok',
              cssClass: 'secondary',
              handler: (data) => {
                console.log('Confirm Ok', data);
              }
            }
          ]}
        />				
			</IonContent>
		</IonPage>
	)
}

export default User;