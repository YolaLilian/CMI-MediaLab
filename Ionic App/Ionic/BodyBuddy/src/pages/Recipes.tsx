import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import './Recipes.css';

import { RecipeList } from '../components/RecipeList';

const Recipes: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="quinary">
          <IonTitle className="header__title">Recepten</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="title">Recepten</IonTitle>
          </IonToolbar>
        </IonHeader>
        <RecipeList />
      </IonContent>
    </IonPage>
  );
};

export default Recipes;