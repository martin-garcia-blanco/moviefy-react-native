import React, { useState, useEffect } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { GoogleSigninButton } from '@react-native-community/google-signin';
import { onGoogleButtonPress, onAuthStateChanged, googleLogOut } from '../../firebase/client'


const User = () => {

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleClick = () => {
    onGoogleButtonPress(setUser)
  }


  return (
    <View>
      <Text>Login</Text>

      {
        user ? <View>
          <Image
            source={{
              uri: user.avatar,
            }}
            style={{ flex: 1, width: 200, height: 200 }}
          />
          <Text>Usuario: {user.userName}</Text>
          <Text>email: {user.email}</Text>
          <Text>avatarUrl: {user.avatar}</Text>
          <Button onPress={() => googleLogOut(setUser)} title='logOut' />
        </View>
          : <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={handleClick}
            disabled={false} />
      }

    </View>
  );
};

export default User;
