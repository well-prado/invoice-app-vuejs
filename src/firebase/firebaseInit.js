import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBEnxXZLh54RSRA5QRYESZpgvg_CE58tq8",
  authDomain: "invoice-app-vuejs-5c5a6.firebaseapp.com",
  projectId: "invoice-app-vuejs-5c5a6",
  storageBucket: "invoice-app-vuejs-5c5a6.appspot.com",
  messagingSenderId: "304813069550",
  appId: "1:304813069550:web:ca7a11db995e9355fd8fff"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
