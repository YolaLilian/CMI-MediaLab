import app from './server.js';
import mongodb from "mongodb";
import dotenv from "dotenv";

import RecipesDAO from './dao/recipesDAO.js';

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(
	process.env.MYND_DB_URI, {
		poolSize: 50,
		wtimeout: 25000,
		useNewUrlParser: true
	}
) .catch( err => {
	console.error( err.stack );
	process.exit( 1 );
} ) .then (async client => {
	await RecipesDAO.injectDB( client );
	app.listen( port, () => {
		console.log( `listening on port ${port}` )
	} )
} )