import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBfMpNOvcX9j1hO6PRspFKybojqa7I09w8",
    authDomain: "mobile-formago.firebaseapp.com",
    databaseURL: "https://mobile-formago.firebaseio.com",
    projectId: "mobile-formago",
    storageBucket: "mobile-formago.appspot.com",
    messagingSenderId: "191007405806"
  };
  
firebase.initializeApp (config);
const auth = firebase.auth ();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider ();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider ();
const githubAuthProvider = new firebase.auth.GithubAuthProvider ();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider ();

const database = firebase.database ();
export {
    auth,
    database,
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider
};