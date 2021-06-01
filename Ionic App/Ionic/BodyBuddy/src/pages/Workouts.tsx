import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Workouts.css';

import Workout from '../components/Workout';

const Workouts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="quinary">
          <IonTitle class="header__title">Oefeningen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" class="title">Sporten</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Workouts page" />
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
