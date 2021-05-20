import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar  } from '@ionic/react';
import './Recipes.css';

import { RecipeList } from '../components/RecipeList';


const Recipes: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="quinary">
          <IonTitle class="header__title">Recepten</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <RecipeList />
      </IonContent>
    </IonPage>
  );
};

export default Recipes;