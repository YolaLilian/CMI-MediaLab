import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Workouts.css';

import { WorkoutList } from '../components/WorkoutList';

const Workouts: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="title">Workouts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <WorkoutList />
      </IonContent>
    </IonPage>
  );
};

export default Workouts;
