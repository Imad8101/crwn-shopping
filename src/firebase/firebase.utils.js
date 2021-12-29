import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCND46u1kM8iS1-7NsBDGdBOAQjzaQO874",
  authDomain: "crwn-clothing-da7d1.firebaseapp.com",
  projectId: "crwn-clothing-da7d1",
  storageBucket: "crwn-clothing-da7d1.appspot.com",
  messagingSenderId: "676132256734",
  appId: "1:676132256734:web:dbea5d95abac5bf78b3b4f",
  measurementId: "G-DLET24Y3NR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
