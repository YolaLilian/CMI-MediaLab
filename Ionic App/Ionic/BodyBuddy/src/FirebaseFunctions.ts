import firebase from './FirebaseConfiguration';
import 'firebase/auth';
import 'firebase/firestore';

import { toast } from './components/Toast';

const db = firebase.firestore();
  
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

export async function registerUser(username: string, password: string, yearOfBirth: string) {
    
    const email = `${username}@bodybuddy.com`;

    // try {
    firebase.auth().createUserWithEmailAndPassword( email, password )
    .then( (cred: { user: { uid: string; }; }) => {
        return db.collection( 'users' ).doc(cred.user.uid).set( {
            username: username,
            yearOfBirth: yearOfBirth
        });
    })
    .then( toast("Registered successfully!"))
    .catch( (error: { message: string; } ) => {
        toast(error.message, 4000);
        return;
    });

};