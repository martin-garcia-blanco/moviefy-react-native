import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCNJ2J5E4v-f5V_eLL_Xq4ebOMX1494exg",
    authDomain: "moviefy-86f20.firebaseapp.com",
    databaseURL: "https://moviefy-86f20.firebaseio.com",
    projectId: "moviefy-86f20",
    storageBucket: "moviefy-86f20.appspot.com",
    messagingSenderId: "874180977947",
    appId: "1:874180977947:web:a67fad2b5f39305534dfbe",
    measurementId: "G-53RF128W9L"
  };

  // Initialize Firebase
   !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

export const loginWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().useDeviceLanguage();
}

// export const loginWithGoogle = () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider();
//     return firebase.auth().signInWithPopup(googleProvider);
// }
