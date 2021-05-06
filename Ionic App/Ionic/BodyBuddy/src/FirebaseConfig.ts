import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyB8FcPXFNzyODI6MJzBUCpotLgqGTph7-Q",
    authDomain: "body-buddy-44254.firebaseapp.com",
    projectId: "body-buddy-44254",
    storageBucket: "body-buddy-44254.appspot.com",
    messagingSenderId: "20486120886",
    appId: "1:20486120886:web:7f3a200b006fe6fe3acd17",
    measurementId: "G-BPPN0K5G9D"
};

if ( !firebase.apps.length ) {
    firebase.initializeApp( config );
} else {
    firebase.app(); // if already initialized, use that one
};


