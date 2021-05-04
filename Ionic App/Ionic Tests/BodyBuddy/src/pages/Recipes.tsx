import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Recipes.css';

const Recipes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="quinary">
          <IonTitle class="header__title">Recepten</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" class="title">Recepten</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Recepten" />
      </IonContent>
    </IonPage>
  );
};

export default Recipes;