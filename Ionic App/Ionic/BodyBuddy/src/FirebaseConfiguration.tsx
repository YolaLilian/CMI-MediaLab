import firebase from 'firebase';

const config = {

    apiKey: "AIzaSyAmIXFeMqUQgeIIouYvdfODa5gxSKwJEe4",
    authDomain: "body-buddy-38802.firebaseapp.com",
    projectId: "body-buddy-38802",
    storageBucket: "body-buddy-38802.appspot.com",
    messagingSenderId: "969508446639",
    appId: "1:969508446639:web:75d00fdb9ea31619544f5a"

};

var app: any = '';

if ( !firebase.apps.length ) {
    app = firebase.initializeApp( config );
} else {
    firebase.app();
};

export default app;