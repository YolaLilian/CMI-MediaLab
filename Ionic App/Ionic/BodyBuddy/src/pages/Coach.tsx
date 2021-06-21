import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonAlert, IonImg, IonTitle, IonToolbar, useIonAlert, IonButton } from '@ionic/react';
import './Coach.css';
import { image } from 'ionicons/icons';

const Coach: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="quinary">
          <IonTitle className="header__title">Coach</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Coach;
