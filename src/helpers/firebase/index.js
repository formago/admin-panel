import firebase from 'firebase';
import { firebaseConfig } from '../../settings';
require("firebase/database");



firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider ();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider ();
const githubAuthProvider = new firebase.auth.GithubAuthProvider ();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider ();


const database = firebase.database();

export {
    // auth,
    database,
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider
};