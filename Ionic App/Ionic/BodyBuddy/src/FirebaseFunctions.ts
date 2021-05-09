// import firebase from 'firebase';
import firebase from './FirebaseConfiguration';
import 'firebase/auth';

import { toast } from './components/Toast';
  
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