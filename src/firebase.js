import firebase from "firebase";

//#1 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBINDUcZ-iQPHVUP1fVK4Ku0Hl5nIBBl9M",
  authDomain: "clone-27359.firebaseapp.com",
  databaseURL: "https://clone-27359.firebaseio.com",
  projectId: "clone-27359",
  storageBucket: "clone-27359.appspot.com",
  messagingSenderId: "210036369012",
  appId: "1:210036369012:web:297a83f7f97cbec1c69321",
  measurementId: "G-GLRMBH81CM",
};

//#2 Set up firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//#3 Initialize DB
const db = firebaseApp.firestore();

//#4 Initialize Authentication
const auth = firebase.auth();

export { db, auth };
