import * as Realm from 'realm-web';

import { toast } from './components/Toast';

const REALM_APP_ID = 'mynd-erhmw';
const app = new Realm.App( { id: REALM_APP_ID } );

export async function handleRegistrationAndLogin( email, password, name, dateOfBirth, residence ) {

	try {
		await app.emailPasswordAuth.registerUser( email, password );
		await additionalRegistration( email, password, name, dateOfBirth, residence );
		toast( "Gelukt! U bent geregistreerd!" );
	} catch ( error ) {
		console.log( error );
		toast( "Er is iets misgegaan!" );
	}

}

export async function loginUser( email, password ) {
	
	try {
		await app.logIn( Realm.Credentials.emailPassword( email, password ) );
		return true;
	} catch( error ) {
		console.log( error );
		return false;
	}

}

export async function additionalRegistration( email, password, name, dateOfBirth, residence ) {

	const user = await app.logIn( Realm.Credentials.emailPassword( email, password ) );
	const mongo = user.mongoClient("mongodb-atlas");
	const collection = mongo.db("mynd").collection("users");

	const filter = {
		userID: user.id,
	};

	const newUser = {

		"name": name,
		"dateOfBirth": dateOfBirth,
		"residence": residence,
		"dateOfRegistration": new Date().toISOString().split( "T" )[0],
		"coach": "",
		"partition": "thing"
	};

	try {
		await collection.insertOne( newUser );
		toast( "Gelukt! De gegevens zijn opgeslagen." );
	} catch ( error ) {
		console.log( error );
	}
}
