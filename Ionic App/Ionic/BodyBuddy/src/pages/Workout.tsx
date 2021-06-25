import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, useIonViewDidEnter  } from '@ionic/react';

import { useParams } from "react-router-dom";

import WorkoutDataService from "../services/workout";

import { WorkoutDetails } from '../components/WorkoutDetails';

export const Workout = ( props: any ) => {

	const [ workout, setWorkout ] = useState<any>( null );
	let workoutID = useParams();
	
	useEffect ( () => {
		getWorkout();
	}, [workoutID] );

	useIonViewDidEnter( () => {
		getWorkout();
	} );

	const getWorkout = async () => {
		await WorkoutDataService.getWorkout( workoutID )
		.then( ( response: { data: React.SetStateAction<never[]>; } ) => {
			setWorkout ( response.data );
			console.log(response.data);
		} )
		.catch( ( error: any ) => {
			console.log( error );
		} );
	}

	return (
		<IonPage>
		  	<IonContent fullscreen>
				{ workout && <WorkoutDetails workout={ workout } /> }
		  	</IonContent>
		</IonPage>
	);

};

export default Workout;