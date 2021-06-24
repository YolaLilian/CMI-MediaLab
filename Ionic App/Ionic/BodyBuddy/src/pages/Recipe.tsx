import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, useIonViewDidEnter  } from '@ionic/react';

import { useParams } from "react-router-dom";
import RecipeDataService from "../services/recipe"; 

import { RecipeDetails } from '../components/RecipeDetails';
import { RecipeList } from '../components/RecipeList';


export const Recipe = (props: any) => {
	
	const [ recipe, setRecipe ] = useState<any>( null );
	let recipeID = useParams();
	
	useEffect ( () => {
		getRecipe();
	}, [recipeID] );

	useIonViewDidEnter( () => {
		getRecipe();
	} );

	const getRecipe = async () => {
		await RecipeDataService.getRecipe( recipeID )
		.then( ( response: { data: React.SetStateAction<never[]>; } ) => {
			setRecipe ( response.data );
			console.log(response.data);
		} )
		.catch( ( error: any ) => {
			console.log( error );
		} );
	}

	return (
		<IonPage>
		  	<IonContent fullscreen>
				{ recipe && <RecipeDetails recipe={ recipe } /> }
		  	</IonContent>
		</IonPage>
	);

}

export default Recipe;