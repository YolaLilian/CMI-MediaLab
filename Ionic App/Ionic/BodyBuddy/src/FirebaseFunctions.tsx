import firebase from './FirebaseConfiguration';

import { toast } from './components/Toast';


const db = firebase.firestore();
const userDB = db.collection("/users");

export async function loginUser( email: string, password: string) {

    try {
        const res = await firebase.auth().signInWithEmailAndPassword( email, password );
        console.log( res );
        return true;
    } catch ( error ) {
        console.log( error );
        return false;
    }

};

export async function registerUser(email: string, password: string, yearOfBirth: string) {

    firebase.auth().createUserWithEmailAndPassword( email, password )
    .then( (cred: { user: { uid: string; }; }) => {
        return db.collection( 'users' ).doc(cred.user.uid).set( {
            email: email,
            yearOfBirth: yearOfBirth
        });
    })
    .then( toast("Registered successfully!"))
    .catch( (error: { message: string; } ) => {
        toast(error.message, 4000);
        return;
    });

};

export function getUsers(): [] {

    return (
        userDB.get()
        .then((snapshot: any) => {

            var users: [ id: any, username: any, yearOfBirth: any ][] = [];

            snapshot.forEach( (doc: any) => {

                users.push( [doc.id, doc.data().username, doc.data().yearOfBirth] );

            });

            return(users);

        })
        .catch( Error )

    )

};