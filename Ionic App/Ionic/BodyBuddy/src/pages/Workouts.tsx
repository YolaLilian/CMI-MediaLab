import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Workouts.css';

import Workout from '../components/Workout';

const Workouts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="quinary">
          <IonTitle className="header__title">Oefeningen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="title">Sporten</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Workout />
        <Workout />
        <Workout />
        <Workout />
        <Workout />
        <Workout />
      </IonContent>
    </IonPage>
  );
};

export default Workouts;
