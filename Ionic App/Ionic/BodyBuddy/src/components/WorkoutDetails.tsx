import React from 'react';

import { IonTitle, IonList, IonItem, IonImg, IonText } from '@ionic/react';
import { forEachChild } from 'typescript';

export function WorkoutDetails( {workout}:any ) {

	console.log(workout);
	console.log(workout.tags);

	return <> 	
		<IonList>
			<IonItem>
				<IonImg src={ workout!.img } />
			</IonItem>
			<IonItem>
				<IonTitle>
					<h1>{ workout!.name }</h1>
				</IonTitle>
			</IonItem>
			<IonItem>
				<IonText>
					<p>{ workout!.short }</p>
				</IonText>
			</IonItem>
			<IonItem>
				<IonText>
					<p>{ workout!.description }</p>
				</IonText>
			</IonItem>
			<IonItem>
				<IonText>
					<p>{ workout!.tags[1] }</p>
				</IonText>
			</IonItem>
			<IonItem>
				<p>here comes the Spotify implementation hopefully</p>
			</IonItem>
		</IonList>
	</>
};