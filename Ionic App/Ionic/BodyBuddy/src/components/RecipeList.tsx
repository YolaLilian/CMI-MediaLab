import React, { useState, useEffect } from 'react';

import { IonList, IonItem, IonCard, IonTitle, IonText, IonImg, IonButton } from '@ionic/react';

import { Link } from 'react-router-dom'; 

import RecipeDataService from "../services/recipe";

export const RecipeList = () => {

	const [ data, setData ] = useState([]);

	useEffect(() => {

		loadData();

	}, [] );

	const refreshList = () => {

		loadData();

	}

	const find = ( query: string, by: string ) => {

		RecipeDataService.find( query, by )
		.then( response => {
			console.log(response.data);
			setData( response.data.recipes );
		})
		.catch( error => {
			console.log( error );
		});
	};

	const findByTagHappy = () => {
		find ("happy", "tags" );
	}

	const findByTagNeutral = () => {
		find ("neutral", "tags" );
	}

	const findByTagSad = () => {
		find ("sad", "tags" );
	}

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

		<IonList>
			<IonButton onClick={findByTagHappy}>
			Happy
			</IonButton>
			<IonButton onClick={findByTagNeutral}>
			Neutral
			</IonButton>
			<IonButton onClick={findByTagSad}>
			Sad
			</IonButton>
			 {

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