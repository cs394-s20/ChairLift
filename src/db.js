import React from 'react'; 
import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDOUjynG823XRxJhOmYPjkE9vEx0Yv5GlI",
    authDomain: "chairlift-3d5a9.firebaseapp.com",
    databaseURL: "https://chairlift-3d5a9.firebaseio.com",
    projectId: "chairlift-3d5a9",
    storageBucket: "chairlift-3d5a9.appspot.com",
    messagingSenderId: "28477843131",
    appId: "1:28477843131:web:efa2ef4e6c511688f92b9e"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

export default db;