import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-nEXulD-fwEDi39P6OFzxYuYlCUXIRPk",
  authDomain: "linkedin-clone-cf6f8.firebaseapp.com",
  projectId: "linkedin-clone-cf6f8",
  storageBucket: "linkedin-clone-cf6f8.appspot.com",
  messagingSenderId: "501455801617",
  appId: "1:501455801617:web:dfe3a77e48fbc8049590b0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
