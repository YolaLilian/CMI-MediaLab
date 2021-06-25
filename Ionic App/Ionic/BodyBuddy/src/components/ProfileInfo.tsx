import React, { useState, useEffect } from 'react';

import { IonAlert, IonFab, IonFabButton, IonIcon, IonImg, IonButton } from '@ionic/react';
import { settings } from 'ionicons/icons';

import '../pages/Profile.css';


export function ProfileInfo( {info}:any ) {

	const [showAlert, setShowAlert] = useState(false);
	const [age, setAge] = useState(0);
	const [membership, setMembership] = useState(0);

	console.log(info);
	const infoDetails = info.info_details;
	console.log(infoDetails);

	useEffect(() => {
		getAge(info.dateOfBirth);
		getMembership( info.dateOfRegistration)
	}, [] )

	function getAge( dateOfBirth: any) {
		const today = new Date();
		const birthDate = new Date(dateOfBirth);
		let age = today.getFullYear() - birthDate.getFullYear();
		const m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		// console.log(age);
		setAge(age);
	}

	function getMembership( dateOfRegistration: any) {
		const today = new Date();
		const membershipDate = new Date(dateOfRegistration);
		let membership = today.getMonth() - membershipDate.getMonth();
		const m = today.getMonth() - membershipDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < membershipDate.getDate())) {
			membership--;
		}
		console.log(m);
		setMembership(membership);
	}

	const findByTagHappy = () => {
		sessionStorage.clear();
		sessionStorage.setItem("mood", "happy");
	  }
	  
	  const findByTagNeutral = () => {
		sessionStorage.clear();
		sessionStorage.setItem("mood", "neutral");
	  }
	
	  const findByTagSad = () => {
		sessionStorage.clear();
		sessionStorage.setItem("mood", "sad");
	  }

	return <> 
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

                if (data === 'Boos') {
                  findByTagSad()
                  window.location.reload(false);
                } else if (data === 'Blij') {
                  findByTagHappy()
                  window.location.reload(false);
                } else if (data === 'Stabiel') {
                  findByTagNeutral()
                  window.location.reload(false);
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
        <h1 className="profiel__header">{info.name}</h1>
        { info.img ? <IonImg className="profielfoto_db" src={info.img} /> : <IonImg className="profielfoto" src="../../assets/images/background/Profielfoto.png" /> }
		{/* <IonImg className="image" src={ info[ 'img' ] }></IonImg> */}
        <p className="sub__head">Leeftijd</p>
        { info.dateOfBirth !== "" ? <p className="input__text">{age} jaar</p> :
		<p className="input__text">niet beschikbaar</p> }
        <p className="sub__head">Mynd. Member sinds</p>
        <p className="input__text">{membership} maanden</p>
        <IonButton className="profile__button" onClick={() => setShowAlert(true)} expand="block">Mood</IonButton>
	</>
};