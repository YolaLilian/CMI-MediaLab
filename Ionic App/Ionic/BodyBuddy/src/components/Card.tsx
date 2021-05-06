import React from 'react';

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg } from '@ionic/react';

// import temporaryImage from '../assets/img/DSC_0269.JPG';
// import temporaryImage from 'http://placekitten.com/g/200/300';
const Card: React.FC = () => {
	return(
		<IonCard>
			<IonCardHeader>
				<IonImg src='http://placekitten.com/g/200/300' />
				<IonCardTitle>
					Dit is een titel!
				</IonCardTitle>
				<IonCardContent>
					Dit is wat content!
				</IonCardContent>
			</IonCardHeader>
		</IonCard>
	);
};

export default Card;