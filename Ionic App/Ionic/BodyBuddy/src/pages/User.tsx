import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonAlert, IonImg, IonTitle, IonToolbar, useIonAlert, IonButton } from '@ionic/react';
import './User.css';
import { image } from 'ionicons/icons';

const User: React.FC = () => {
  // const [present] = useIonAlert();
  const [showAlert5, setShowAlert5] = useState(true);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="quinary">
          <IonTitle className="header__title">Gebruiker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonAlert
          isOpen={showAlert5}
          onDidDismiss={() => setShowAlert5(false)}
          header={'Hoe voel je je vandaag?'}
          inputs={[
            {
              name: 'radio1',
              type: 'radio',
              label: 'Blij',
              value: 'value1',
              checked: true
            },
            {
              name: 'radio2',
              type: 'radio',
              label: 'Stabiel',
              value: 'value2'
            },
            {
              name: 'radio3',
              type: 'radio',
              label: 'Boos',
              value: 'value3'
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
              handler: () => {
                console.log('Confirm Ok');
              }
            }
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default User;
