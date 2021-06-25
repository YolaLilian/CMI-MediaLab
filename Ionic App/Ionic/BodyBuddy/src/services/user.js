import http from "../http-common";

class RecipeDataService {

	getUser( ) {
		return http.get( `mynd_users_getUser` );
	
	;}

}

export default new RecipeDataService();