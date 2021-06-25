import React, { useState, useEffect } from 'react';
import { IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonImg, IonContent, IonList, IonPage, IonHeader, IonToolbar, IonTitle } from "@ionic/react";

import UserDataService from "../services/user"; 
import { getUserID } from '../functions';
import { ProfileInfo } from '../components/ProfileInfo';


import './Profile.css';

const User: React.FC = () => {

  const [ user, setUser] = useState<any>(null)

  async function click() {
    console.log('geklikt')
  }

    useEffect( () => {
	  getUserInfo();
	  
  }, []);

  const getUserInfo = () => {
	  const userID = getUserID();
	  console.log(userID);
	  UserDataService.getUser( userID )
	  .then ( ( response: {data: React.SetStateAction<never[]>; } ) => {
		  setUser( response.data );
		  console.log(response.data)
	  })
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
        
		{ user && <ProfileInfo info= { user } /> }
        <div className="dot__yellow" onClick={click}></div>
        <div className="dot__pink" onClick={click}></div>
        <div className="dot__purple" onClick={click}></div>
        <IonList id="voeding_list">
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
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default User;