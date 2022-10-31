import firebase from "firebase/app";
import "firebase/auth";
 
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDmPkH-vPsXXa4TjLrJiLcJY3xKGJumtxU",
    authDomain: "botogram-99a6d.firebaseapp.com",
    projectId: "botogram-99a6d",
    storageBucket: "botogram-99a6d.appspot.com",
    messagingSenderId: "482353377687",
    appId: "1:482353377687:web:50b6bb46845f17f60cd4d2"
  }).auth();