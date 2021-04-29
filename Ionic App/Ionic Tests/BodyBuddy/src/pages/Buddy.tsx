import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Buddy.css';

const Buddy: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="header__title">Find a buddy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" class="title" >Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Find a buddy" />
      </IonContent>
    </IonPage>
  );
};

export default Buddy;
