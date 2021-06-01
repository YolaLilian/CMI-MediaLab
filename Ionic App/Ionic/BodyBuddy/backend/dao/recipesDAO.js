let recipes;

export default class RecipesDAO {
	static async injectDB( conn ) {
		if ( recipes ) {
			return;
		}
		try {
			recipes = await conn.db( process.env.BODYBUDDY_NS ).collection( "recipes" );
		} catch ( error ) {
			console.error(
				`Unable to establish a collection handle in recipesDAO: ${ error }`,
			);
		};
	};

	static async getRecipes ( {
		filters = null,
		page = 0,
		recipesPerPage = 50,
	} = {} ) {

		let query;
		// implementing filters, in tutorial but not needed for diffrent database usages right now
		if ( filters ) {
			if ("name" in filters ) {
				query = { $text: { $search: filters['name'] } }
			} else if ("cuisine" in filters ) { 
				query = { "cuisine": { $eq: filters['cuisine']} }
			} else if ( "zipcode" in filters) {
				query = { "address.zipcode": { $eq: filters['zipcode'] } }
			}
		}

		let cursor;

		try {
			cursor = await recipes.find( query );
		} catch ( error ) {
			console.error( `Unable to issue find command, ~{ error }`);
			return {
				recipesList: [], totalNumRecipes: 0
			};
		};

		const displayCursor = cursor.limit( recipesPerPage).skip(recipesPerPage * page);

		try {
			const recipesList = await displayCursor.toArray();
			const totalNumRecipes = await recipes.countDocuments( query );
			
			return { recipesList, totalNumRecipes };
		} catch ( error ) {
			console.error( `Unable to convert cursor to array or problem counting documents, ${ error }`);

			return { recipesList: [], totalNumRecipes: 0};
		}
	} 
}
