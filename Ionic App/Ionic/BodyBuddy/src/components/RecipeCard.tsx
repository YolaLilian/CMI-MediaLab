import React from 'react';

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg } from '@ionic/react';

import { getUsers } from '../FirebaseFunctions';

interface User {

	yearOfBirth: string

};

const RecipeCard: React.FC = () => {

	getUsers();
	
	return(
		<IonCard>
			<IonCardHeader>
				<IonImg src='http://placekitten.com/g/200/300' />
				<IonCardTitle>
				</IonCardTitle>
				<IonCardContent>
					Dit is wat content!
				</IonCardContent>
			</IonCardHeader>
		</IonCard>
	);
};

export default RecipeCard;