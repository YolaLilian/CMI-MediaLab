import React, { useState, useEffect } from 'react';

import { IonList, IonItem, IonCard, IonTitle, IonText } from '@ionic/react';

import RecipeDataService from "../services/recipe";

export const RecipeList = () => {

	const [ data, setData ] = useState([]);

	useEffect(() => {

		// async function loadData() {
			
			// const loadedData = await RecipeDataService.getAll();
			// console.log( response.data );
			// setData( response.data.recipes );

		// }

		loadData();

	}, [] );

	const loadData = () => {
		RecipeDataService.getAll()
		.then( response => {
			// console.log( response.data );
			setData( response.data.recipes );
		} )
		.catch ( error => {
			console.log( error );
		} );
	};

	const recipes = data;
	// console.log(recipes);
	
	return <> {

		<IonList> {

			recipes.map( (anObjectMapped: any, index: any) => {
				// console.log(anObjectMapped);
				return <React.Fragment key={index}> {
					<IonItem>
						<IonCard>
							<IonTitle className="ion-padding ion-margin">{ anObjectMapped[ 'name' ] }</IonTitle>
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