import firebase from 'firebase';

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