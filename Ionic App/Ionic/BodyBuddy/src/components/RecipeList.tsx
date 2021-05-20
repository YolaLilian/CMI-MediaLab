import React, { useState, useEffect } from 'react';

import { IonList, IonItem, IonCard, IonTitle } from '@ionic/react';
import { getUsers } from '../FirebaseFunctions';

export const RecipeList = () => {

	const [data, setData] = useState([]);

	useEffect(() => {

		async function loadData() {
			
			const loadedData = await getUsers();
			setData(loadedData);

		}

		loadData();

	}, []);

	const recipes = data;
	console.log(recipes);
	
	return <> {

		<IonList> {

			recipes.map( (anObjectMapped: any, index: any) => {
				console.log(anObjectMapped[0]);
				return <React.Fragment key={index}> {
					<IonItem>
						<IonCard>
							<IonTitle>{anObjectMapped[1]}</IonTitle>
						</IonCard>
					</IonItem>
					
				} </React.Fragment>
		
			})

		} </IonList>

	} </>

}