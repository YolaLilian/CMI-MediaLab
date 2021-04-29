import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Workouts.css';

const Workouts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="header__title">Sporten</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" class="title">Sporten</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Workouts page" />
      </IonContent>
    </IonPage>
  );
};

export default Workouts;
