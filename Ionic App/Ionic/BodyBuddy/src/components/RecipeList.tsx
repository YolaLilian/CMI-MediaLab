import React, { useState, useEffect } from 'react';

import { IonList, IonItem, IonCard, IonTitle, IonText, IonImg, IonButton } from '@ionic/react';

import { Link } from 'react-router-dom'; 

import RecipeDataService from "../services/recipe";

export const RecipeList = () => {

	const [ data, setData ] = useState([]);

	useEffect(() => {

		loadData();

	}, [] );

	const loadData = () => {
		RecipeDataService.getAll()
		.then( ( response: { data: { recipes: React.SetStateAction<never[]>; }; } ) => {
			setData( response.data.recipes );
		} )
		.catch ( ( error: any) => {
			console.log( error );
		} );
	};
	
	const recipes = data;
	
	const find = (query: string, by: string) => {

		RecipeDataService.find(query, by)
			.then(response => {
				setData(response.data.recipes);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const findMood = () => {
		if (sessionStorage.mood === "happy") {
			find("happy", "tags");
		} else if (sessionStorage.mood === "neutral") {
			find("neutral", "tags");
		} else if (sessionStorage.mood === "sad") {
			find("sad", "tags");
		} else if (sessionStorage.length === 0) {
			loadData();
		}
	}

	const clearFilter = () => {
		sessionStorage.clear();
		findMood();
	}
	
	return <> {
		<IonList> 
			<IonButton onClick={clearFilter}>Alle recepten</IonButton>
			{
			recipes.map((anObjectMapped: any, index: any) => {
				return <React.Fragment key={index}> {
					<IonItem>
						<IonCard>
							<IonImg src={ anObjectMapped[ 'img' ] }></IonImg>
								<IonTitle className="ion-padding ion-margin"><Link to={ `recipes/${ anObjectMapped['_id'].toString() } `}>{ anObjectMapped[ 'name' ] }</Link></IonTitle>
								<IonText>
									<p className="ion-padding ion-margin">
										{ anObjectMapped[ 'short' ] }
									</p>
								</IonText>
						</IonCard>
					</IonItem>
				} </React.Fragment>
			})
		} </IonList>
	} </>
}