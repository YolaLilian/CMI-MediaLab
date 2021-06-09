import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Buddy.css';

const Buddy: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="quinary">
          <IonTitle className="header__title">Find a buddy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="title" >Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Buddy;
