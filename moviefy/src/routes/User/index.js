import React from 'react';
import { Text, View, Button } from 'react-native';
import  { loginWithGoogle } from '../../firebase/client'
import { Google } from '@react-native-community/google-signin';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId: '874180977947-qtpqok96qd5sodiipd6engo6fsuornek.apps.googleusercontent.com',
});

const User = () => {

const handleClick = ()=>{}

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

  return (
    <View>
      <Text>Login</Text>
      <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then((a) => console.log('Signed in with Google!', a))}
    />
     <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    disabled={false} />
      <Button onPress={handleClick} title='login with google'></Button>
    </View>
  );
};

export default User;
