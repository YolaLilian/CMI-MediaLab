import { IonPage, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonTitle, IonLabel, IonInput, IonButton, } from '@ionic/react';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { toast } from '../components/Toast';

import { additionalRegistration } from '../functions';

const AdditionalRegistration: React.FC = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function additionalRegister() {
		
		// if ( password !== confPassword ) {
		// 	toast("Passwords do not match!");
		// 	return;
		// };

		if ( name.trim() === '' ) {
			toast("Name cannot be empty!");
		};

		const res = await additionalRegistration( email, password, name )
	}

	return(
		<IonPage>
			<IonHeader>
				<IonToolbar color="quinary">
					<IonTitle className="header__title">
						Registreren - volgende stappen
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					<IonItem>
						<IonLabel position="floating">Naam</IonLabel>
						<IonInput type="text" onIonChange={ ( e:any ) => setName( e.target.value ) }></IonInput>	
					</IonItem>
					<IonItem>
						<IonLabel position="floating">Emailadres</IonLabel>
						<IonInput type="text" onIonChange={ ( e:any ) => setEmail( e.target.value ) }></IonInput>	
					</IonItem>
					<IonItem>
						<IonLabel position="floating">Wachtwoord</IonLabel>
						<IonInput type="password"  onIonChange={ ( e:any ) => setPassword( e.target.value ) }></IonInput>
					</IonItem>
					<IonItem>
						<IonButton onClick={ additionalRegister }>Opslaan!</IonButton>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	)
}

export default AdditionalRegistration;