import React from 'react';

import { IonItem } from '@ionic/react';

import Card from './Card';

const Recipe: React.FC = () => {
	return(
		<IonItem>
			<Card />
		</IonItem>
	);
};

export default Recipe;