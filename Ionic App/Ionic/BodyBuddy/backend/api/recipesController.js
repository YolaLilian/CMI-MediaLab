import RecipesDAO from "../dao/recipesDAO.js";

export default class RecipesController {

	static async apiGetRecipes( req, res, next ) {
		const recipesPerPage = req.query.recipesPerPage ? parseInt( req.query.recipesPerPage, 10) : 50;
		const page = req.query.page ? parseInt( req.query.page, 10 ) : 0;

		// included in tutorial, not really implemented or adjusted right now
		let filters = {};

		if ( req.query.cuisine ) {
			filters.cuisine = req.query.cuisine
		} else if ( req.query.zipcode ) {
			filters.zipcode - req.query.zipcode
		} else if ( req.query.name ) {
			filters.name = req.query.name
		}

		const { recipesList, totalNumRecipes } = await RecipesDAO.getRecipes( {
			filters, 
			page, 
			recipesPerPage,
		} )

		let response = {
			recipes: recipesList,
			page: page,
			filters: filters,
			entries_per_page: recipesPerPage,
			total_results: totalNumRecipes
		}
		res.json( response );
	}
}