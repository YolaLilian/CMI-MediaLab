import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
	// IonButton, IonList, IonItem, IonLabel
 } from '@ionic/react';
import './Recipes.css';

import { RecipeList } from '../components/RecipeList';

const Recipes: React.FC = () => {

  return (
    <IonPage>
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