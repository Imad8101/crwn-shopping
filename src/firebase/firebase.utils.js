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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
