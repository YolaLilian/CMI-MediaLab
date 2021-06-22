import http from "../http-common";

class RecipeDataService {

	getAll( page=0 ) {
		return http.get( `mynd_recipes_getAll` );
		// return http.get( `recipes?page=${ page }` );
	;}

	getRecipe( id ) {
		const recipeID = Object.values(id);
		const recipe = http.get( 'mynd_recipes_getRecipe?id=' + recipeID );
		
		return recipe;
	}

}

export default new RecipeDataService();