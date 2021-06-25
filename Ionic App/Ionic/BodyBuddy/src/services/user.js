import http from "../http-common";

class RecipeDataService {

	getUser( userID ) {
		// const ID = Object.values(userID);
		// console.log(ID);
		return http.get( `mynd_users_getUser?id=${userID}` );
	};

}

export default new RecipeDataService();