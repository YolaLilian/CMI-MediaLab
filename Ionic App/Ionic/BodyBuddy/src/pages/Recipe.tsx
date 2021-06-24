import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonList, IonItem, IonImg, IonText } from '@ionic/react';

import { useParams } from "react-router-dom";
import RecipeDataService from "../services/recipe"; 

export const Recipe = (props: any) => {

	const [ data, setData ] = useState<any>( {} );
	let recipeID = useParams();
	const recipe = data;
	// const recipeDetails = recipe.recipe_details;
	// const ingredients = recipe.recipe_details.ingredients;

	// const ingredientsArray: any = [];
	// Object.keys( ingredients ).forEach( key => ingredientsArray.push ( {
	// 	ingredient: key,
	// 	item: ingredients[key]
	// }));
	// console.log(ingredientsArray);

	useEffect ( () => {
		getRecipe();
	}, [ ] );

	const getRecipe = () => {
		RecipeDataService.getRecipe( recipeID )
		.then( ( response: { data: React.SetStateAction<never[]>; } ) => {
			setData ( response.data );
		} )
		.catch( ( error: any ) => {
			console.log( error );
		} );
	}

	return <> (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle size="large" className="title">Recepten </IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					<IonItem>
						<IonImg src={ recipe!.img } />
					</IonItem>
					 <IonItem>
						<IonTitle>
							<h1>{ recipe!.name }</h1>
						</IonTitle>
					</IonItem>
					<IonItem>
						<IonText>
							<p>{ recipe!.short }</p>
						</IonText>
					</IonItem>
					<IonItem>
						<IonText>
							<p>{ recipe!.description }</p>
						</IonText>
					</IonItem>
					<IonItem>
						<IonText>
							{/* <p>{ recipe!.tags.tag_1 }</p> */}
						</IonText>
					</IonItem>
					<IonItem>
						<p>here comes the Spotify implementation hopefully</p>
					</IonItem>
					<IonItem>
						<IonTitle>
							<h3>Ingrediënten</h3>
						</IonTitle>
						{/* <IonList>
							{ ingredientsArray.map( (ingredient: any, index: any) => {
								return <React.Fragment key={index}> {
									<IonItem>
										<IonTitle className="ion-padding ion-margin">
											<h4>{ ingredient.item }</h4>
										</IonTitle>
										<IonText>
											<p className="ion-padding ion-margin">{ ingredient.measurement}</p>
										</IonText>
									</IonItem>	
								} </React.Fragment>
							} ) }
						</IonList> */}
					</IonItem>
					{/*<IonItem>
						<IonTitle>
							<h3>Benodigdheden</h3>
						</IonTitle>
						<IonList>
							{ recipe!.recipe_details.items.map( ( item: any, index: any) => {
								return <React.Fragment key={index}> {
									<IonItem>
										<IonText>
											<p>{ item }</p>
										</IonText>
									</IonItem>
								} </React.Fragment> 	
							} ) }
						</IonList>
					</IonItem>
					<IonItem> */}
						{/* <IonTitle>
							<h3>Bereidingswijze</h3>
						</IonTitle>
						<IonList>
							{ recipe!.recipe_details.steps.map( ( step: any, index: any) => {
								return <React.Fragment key={index}> {
									<IonItem>
										<IonImg src={step.img} />
										<IonTitle>
											<h4>Stap {index}</h4>
										</IonTitle>
										<IonText>
											<p>{ step.content }</p>
										</IonText>
									</IonItem>
								} </React.Fragment> 	
							} ) }
						</IonList>					
					</IonItem> */}
				</IonList>
			</IonContent>
		</IonPage>
	) </>
};

export default Recipe;