import React, { useState, useEffect } from 'react';

import { IonList, IonItem, IonCard, IonTitle, IonText, IonImg } from '@ionic/react';

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

	const recipes = data;
	console.log(recipes);
	
	return <> {

		<IonList> {

			recipes.map( (anObjectMapped: any, index: any) => {
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