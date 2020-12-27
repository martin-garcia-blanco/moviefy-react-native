import * as firebase from 'firebase';
import { Google } from '@react-native-community/google-signin';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';

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


GoogleSignin.configure({
  webClientId: '874180977947-qtpqok96qd5sodiipd6engo6fsuornek.apps.googleusercontent.com',
});

const mapUserFromFirebaseAuthToUser = (user) => {
    if(!user) return null

    const {displayName, email, photoURL}  = user
    return {
      avatar: photoURL,
      userName: displayName,
      email
    }
  }

export const onAuthStateChanged = (onChange) => {
    return firebase
    .auth()
    .onAuthStateChanged(user => {
        console.log('debe ser null', user)
        onChange( mapUserFromFirebaseAuthToUser(user))
    });
}


export const onGoogleButtonPress = async (onChange) => {
    try{

        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();


        // Create a Google credential with the token
        const googleCredential = firebase.auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const a= await firebase.auth().signInWithCredential(googleCredential)
        console.log('antes de normalizar',a)
        onChange(mapUserFromFirebaseAuthToUser(a));
    } catch(e){
        console.log(e)
    }
  }

  export const googleLogOut = async (onChange) => {
    try {
        // await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        onChange(null)
    } catch(e) {
        console.log(e)
    }
}