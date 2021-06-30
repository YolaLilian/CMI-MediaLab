import React, { useState, useEffect } from 'react';

import { IonList, IonItem, IonCard, IonTitle, IonText, IonImg, IonButton } from '@ionic/react';

import { Link } from 'react-router-dom';

import WorkoutDataService from "../services/workout";

import './WorkoutList.css';

// import './WorkoutList.css';

export const WorkoutList = () => {

	const [data, setData] = useState([]);

	useEffect(() => {
		findMood();
	}, []);

	const loadData = () => {
		WorkoutDataService.getAll()
			.then((response: { data: { workouts: React.SetStateAction<never[]>; }; }) => {
				setData(response.data.workouts);
			})
			.catch((error: any) => {
				console.log(error);
			});
	};

	const workouts = data;

	const find = (query: string, by: string) => {

		WorkoutDataService.find(query, by)
			.then(response => {
				setData(response.data.workouts);
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
			{
				workouts.map((anObjectMapped: any, index: any) => {
					return <React.Fragment key={index}> {
						<IonItem lines="none">
							<IonCard className="workout__img">
								<IonImg className="image" src={anObjectMapped['img']}></IonImg>
								<IonTitle className="workout__link"><Link to={`workouts/${anObjectMapped['_id'].toString()} `}>{anObjectMapped['name']}</Link></IonTitle>
								<IonText className="workout__text">
									<p className="workout__text">
										{anObjectMapped['short']}
									</p>
								</IonText>
							</IonCard>
						</IonItem>
					} </React.Fragment>
				})
			}
			<IonButton className="list__button" onClick={clearFilter}>Alle Workouts</IonButton>
		</IonList>
	} </>
}