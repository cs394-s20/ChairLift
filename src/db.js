import React from 'react'; 
import firebase from 'firebase/app';
import 'firebase/database';

// var firebaseConfig = {
//     apiKey: ,
//     authDomain: ,
//     databaseURL: ,
//     projectId: ,
//     storageBucket: ,
//     messagingSenderId: ,
//     appId: 
//   };

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

export default db;