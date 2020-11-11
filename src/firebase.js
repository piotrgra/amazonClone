import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "clone-24fe3.firebaseapp.com",
  databaseURL: "https://clone-24fe3.firebaseio.com",
  projectId: "clone-24fe3",
  storageBucket: "clone-24fe3.appspot.com",
  messagingSenderId: "625187815246",
  appId: "1:625187815246:web:b93e0d70c5a7105fda281f",
  measurementId: "G-M3Y7V162R1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
