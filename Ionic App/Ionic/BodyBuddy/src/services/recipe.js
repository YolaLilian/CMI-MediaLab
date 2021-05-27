import http from "../http-common";

class RecipeDataService {

	getAll( page=0 ) {
		return http.get( `/recipes?page=${ page }` );
	;}

}

export default new RecipeDataService();