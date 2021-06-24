import React, { useState, useEffect } from 'react';

import { IonList, IonItem, IonCard, IonButton, IonTitle, IonText, IonImg } from '@ionic/react';

import { Link } from 'react-router-dom';

import RecipeDataService from "../services/recipe";

import './RecipeList.css';

export const RecipeList = () => {

	const [data, setData] = useState([]);

	useEffect(() => {
		findMood();
	}, []);

	const loadData = () => {
		RecipeDataService.getAll()
			.then((response: { data: { recipes: React.SetStateAction<never[]>; }; }) => {
				// console.log( response.data );
				setData(response.data.recipes);
			})
			.catch((error: any) => {
				console.log(error);
			});
	};

	const clearFilter = () => {
		sessionStorage.clear();
		console.log(sessionStorage.length === 0)
		findMood();
	}

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
			console.log('ik kom aan bij happy!!!')
		} else if (sessionStorage.mood === "neutral") {
			find("neutral", "tags");
			console.log('ik kom aan bij neutral!!!')
		} else if (sessionStorage.mood === "sad") {
			find("sad", "tags");
			console.log('ik kom aan bij sad!!!')
		} else if (sessionStorage.length === 0) {
			loadData();
		}
	}

	return <> {
		<IonList> {
			recipes.map((anObjectMapped: any, index: any) => {
				// console.log(anObjectMapped);
				return <React.Fragment key={index}> {
					<IonItem lines="none">
						<IonCard className="recipe__img">
							<IonImg className="image" src={anObjectMapped['img']}></IonImg>
							<IonTitle className="recipe__link"><Link className="recipe__link" to={`recipes/${anObjectMapped['_id'].toString()} `}>{anObjectMapped['name']}</Link></IonTitle>
							<IonText className="recipe__text">
								<p className="recipe__text">
									{anObjectMapped['short']}
								</p>
							</IonText>
						</IonCard>
					</IonItem>
				} </React.Fragment>
			})
		} </IonList>
	} </>
}