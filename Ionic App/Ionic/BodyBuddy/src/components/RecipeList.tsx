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
			// console.log( response.data );
			setData( response.data.recipes );
		} )
		.catch ( ( error: any) => {
			console.log( error );
		} );
	};

	// const refreshData = () => {
	// 	loadData();
	// };
	
	const recipes = data;
	// console.log(recipes);
	
	const find = (query: string, by: string) => {

		RecipeDataService.find(query, by)
			.then(response => {
				console.log(response.data);
				setData(response.data.recipes);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const findMood = () => {
		if (sessionStorage.mood === "happy") {
			find("happy", "tags");
			// refreshData();
			console.log('ik kom aan bij happy!!!')
		} else if (sessionStorage.mood === "neutral") {
			find("neutral", "tags");
			// refreshData();
			console.log('ik kom aan bij neutral!!!')
		} else if (sessionStorage.mood === "sad") {
			find("sad", "tags");
			// refreshData();
			console.log('ik kom aan bij sad!!!')
		} else if (sessionStorage.length === 0) {
			loadData();
		}
	}

	const clearFilter = () => {
		sessionStorage.clear();
		console.log(sessionStorage.length === 0)
		findMood();
	}
	
	return <> {

		<IonList> 
			<IonButton onClick={clearFilter}>Verwijder filter</IonButton>
			{
			recipes.map((anObjectMapped: any, index: any) => {
				// console.log(anObjectMapped);
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