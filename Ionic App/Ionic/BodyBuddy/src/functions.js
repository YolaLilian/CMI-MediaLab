import * as Realm from 'realm-web';

import { toast } from './components/Toast';

const REALM_APP_ID = 'mynd-erhmw';
const app = new Realm.App( { id: REALM_APP_ID } );

export async function registerUser( email, password ) {
	
	try {
		await app.emailPasswordAuth.registerUser( email, password );
		toast( "Gelukt! U bent geregistreerd!" );
        return true;
    } catch ( error ) {
        console.log( error );
		toast( "Er is iets misgegaan!" );
        return false;
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
