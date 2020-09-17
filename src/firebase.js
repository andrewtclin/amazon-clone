import firebase from "firebase";

//#1 Firebase Config
const firebaseConfig = {
  /* Give your own API KEY */
};

//#2 Set up firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//#3 Initialize DB
const db = firebaseApp.firestore();

//#4 Initialize Authentication
const auth = firebase.auth();

export { db, auth };
