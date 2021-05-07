import firebase from 'firebase';
import 'firebase/auth';

import { toast } from './components/Toast';

const config = {
	apiKey: "AIzaSyB8FcPXFNzyODI6MJzBUCpotLgqGTph7-Q",
    authDomain: "body-buddy-44254.firebaseapp.com",
    projectId: "body-buddy-44254",
    storageBucket: "body-buddy-44254.appspot.com",
    messagingSenderId: "20486120886",
    appId: "1:20486120886:web:7f3a200b006fe6fe3acd17",
    measurementId: "G-BPPN0K5G9D"
};

var app: any = '';

if ( !firebase.apps.length ) {
    app = firebase.initializeApp( config );
} else {
    firebase.app();
};
  
export async function loginUser( username: string, password: string) {

    const email = `${username}@bodybuddy.com`;

    try {
        const res = await firebase.auth().signInWithEmailAndPassword( email, password );
        console.log( res );
        return true;
    } catch ( error ) {
        console.log( error );
        return false;
    }

};

export async function registerUser(username: string, password: string) {
    const email = `${username}@bodybuddy.com`;

    try {
        const res = await firebase.auth().createUserWithEmailAndPassword( email, password );
        toast("Registered successfully!")
        return true;
    } catch ( error ) {
        toast(error.message, 4000);
        return ;
    }

}

// export const auth = app.auth(); 
export default app;
