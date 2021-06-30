import React from 'react';
import './Card.css';

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg } from '@ionic/react';

// import temporaryImage from '../assets/img/DSC_0269.JPG';
// import temporaryImage from 'http://placekitten.com/g/200/300';

const Card: React.FC = () => {
	return (
		<IonCard>
			{/* <IonCardHeader>
				Dit is een Header
			</IonCardHeader> */}
			<IonImg src='http://www.wur.nl/upload/55fc85f9-58d9-44e3-b8ee-332d665b2461_food_nutrition_health.jpg' />
			<IonCardTitle>
				Dit is een titel!
				</IonCardTitle>
			<IonCardContent>
				Dit is wat content!
				</IonCardContent>
		</IonCard>
	);
};

export default Card;