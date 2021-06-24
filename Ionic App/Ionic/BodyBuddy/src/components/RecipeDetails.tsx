import React from 'react';

import { IonTitle, IonList, IonItem, IonImg, IonText } from '@ionic/react';

export function RecipeDetails( {recipe}:any ) {

	console.log(recipe);
	const recipeDetails = recipe.recipe_details;
	console.log(recipeDetails);

	return <> 	
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
					<p>{ recipe!.tags }</p>
				</IonText>
			</IonItem>
			<IonItem>
				<p>here comes the Spotify implementation hopefully</p>
			</IonItem>
			<IonItem>
				<IonTitle>
					<h3>Ingrediënten</h3>
				</IonTitle>
			</IonItem>
			<IonItem>
				<IonList>
					{ recipeDetails.ingredients.map( (ingredient: any, index: any) => {
						return <React.Fragment key={index}> {
							<IonItem>
								<IonTitle className="ion-padding ion-margin">
									<h5>{ ingredient.item }</h5>
								</IonTitle>
								<IonText>
									<p className="ion-padding ion-margin">{ ingredient.measurement}</p>
								</IonText>
							</IonItem>	
						} </React.Fragment>
					} ) }
				</IonList>
			</IonItem>
			<IonItem>
				<IonTitle>
					<h3>Benodigdheden</h3>
				</IonTitle>
			</IonItem>
			<IonItem>
				<IonList>
					{ recipeDetails.items.map( ( item: any, index: any) => {
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
			<IonItem>
				<IonTitle>
					<h3>Bereidingswijze</h3>
				</IonTitle>
			</IonItem>
			<IonItem>
				<IonList>
					{ recipeDetails.steps.map( ( step: any, index: any) => {
						return <React.Fragment key={index}> {
							<IonItem>
								<IonImg src={step.img} />
								<IonTitle>
									<h4>Stap {index + 1}</h4>
								</IonTitle>
								<IonText>
									<p>{ step.content }</p>
								</IonText>
							</IonItem>
						} </React.Fragment> 	
					} ) }
				</IonList>
			</IonItem>
		</IonList>
	</>
};