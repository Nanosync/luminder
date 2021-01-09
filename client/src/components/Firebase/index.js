import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';
import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB-vjxnYrYcWElEsoJw7wO09BlZOiqVnE4",
    authDomain: "luminder-4341b.firebaseapp.com",
    databaseURL: "https://luminder-4341b-default-rtdb.firebaseio.com",
    projectId: "luminder-4341b",
    storageBucket: "luminder-4341b.appspot.com",
    messagingSenderId: "829281562599",
    appId: "1:829281562599:web:f94dbd43ec248c258ad742"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
 
export {storage, firebase as default };
 
export { FirebaseContext, withFirebase };