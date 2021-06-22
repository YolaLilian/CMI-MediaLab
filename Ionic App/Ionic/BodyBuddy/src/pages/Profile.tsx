import React, { useState } from 'react';
import { IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonButton, IonFab, IonFabButton, IonImg, IonIcon, IonContent, IonList, IonItem, IonLabel, IonPage, IonHeader, IonAlert, IonToolbar, IonTitle, IonGrid, IonRow, IonCol } from "@ionic/react";

import { restaurant, home, person, heart, barbell, settings } from 'ionicons/icons';

import { logOut } from "../functions";
import './Profile.css';

const User: React.FC = () => {

  const [showAlert, setShowAlert] = useState(true);

  async function click() {
		
		console.log('geklikt')
		
	}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="quinary">
          <IonTitle className="header__title">
            Profiel
					</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="profile__content">
        {/* <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton>Button</IonFabButton>
        </IonFab> */}
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

                if (data == 'Boos') {
                  // console.log("Je voelt je boos")
                  
                } else if (data == 'Blij') {
                  console.log("Je bent nu blij")
                } else if (data == 'Stabiel'){
                  console.log("Je voelt je stabiel")
                }
              }
            }
          ]}
        />

        <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton className="profile__options">
            <IonIcon className="set__icon" icon={settings} />
          </IonFabButton>
        </IonFab>
        <h1 className="profiel__header">Merve Adina</h1>
        <IonImg className="profielfoto" src="../../assets/images/background/Profielfoto.png" />
        <p className="sub__head">Leeftijd</p>
        <p className="input__text">25 jaar</p>
        <p className="sub__head">Mynd. Member sinds</p>
        <p className="input__text">2 maanden</p>
        <p className="sub__head">Mynd. Coach</p>
        <p className="input__text">Sabine Verhoeff</p> <br></br>
        <div className="dot__yellow" onClick={ click }></div>
        <div className="dot__pink" onClick={ click }></div>
        <div className="dot__purple" onClick={ click }></div>
        <IonCard className="food__card" onClick={click}>
          <IonImg className="food__img" src="../../assets/images/background/potloodje.png" />
          <IonCardHeader className="food__header">
            <IonCardTitle className="food__title">Ontbijt</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="food__content">
            Yoghurt met vers fruit
      </IonCardContent>
        </IonCard>
        <IonCard className="food__card" onClick={click}>
          <IonImg className="food__img" src="../../assets/images/background/potloodje.png" />
          <IonCardHeader className="food__header">
            <IonCardTitle className="food__title">Tussendoor</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="food__content">
            Blokje pure chocolade
      </IonCardContent>
        </IonCard>
        <IonCard className="food__card" onClick={click}>
          <IonImg className="food__img" src="../../assets/images/background/potloodje.png" />
          <IonCardHeader className="food__header">
            <IonCardTitle className="food__title">Lunch</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="food__content">
            2 speltcrackers met kipfilet
      </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  )
}

export default User;