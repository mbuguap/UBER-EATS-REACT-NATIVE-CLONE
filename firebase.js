import firebase from "firebase";

const firebaseConfig = {
  apiKey: 'AIzaSyDb0Dvr0L5NIuN3V2Y7Q4Kl9LaVusvHsoQ',
  authDomain: 'medium-clone-10269.firebaseapp.com',
  projectId: 'medium-clone-10269',
  storageBucket: 'medium-clone-10269.appspot.com',
  messagingSenderId: '542812732222',
  appId: '1:542812732222:web:cf5d2524934e22f2234a6f',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;


