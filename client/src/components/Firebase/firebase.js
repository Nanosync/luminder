import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB-vjxnYrYcWElEsoJw7wO09BlZOiqVnE4",
  authDomain: "luminder-4341b.firebaseapp.com",
  projectId: "luminder-4341b",
  storageBucket: "luminder-4341b.appspot.com",
  messagingSenderId: "829281562599",
  appId: "1:829281562599:web:f94dbd43ec248c258ad742"
}

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(err => {
        console.log(err);
      });
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;