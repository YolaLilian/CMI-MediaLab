import http from "../http-common";

class WorkoutDataService {

	getAll( page=0 ) {
		return http.get( `mynd_workouts_getAll` );
	;}

	find(query, by="name") { 
		return http.get(`mynd_workouts_getAll?${by}=${query}`);
	} 

	getWorkout( id ) {
		const workoutID = Object.values(id);
		const workout = http.get( 'mynd_workouts_getWorkout?id=' + workoutID );
		
		return workout;
	}

}

export default new WorkoutDataService();