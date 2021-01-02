import React from 'react';
import { Image, Text, View } from 'react-native';
import { logoUrl } from '../../helpers/constants';
import styles from './styles';

const Error = () => (
  <View style={styles.wrapper}>
    <Image resizeMode="contain" source={logoUrl} style={styles.image} />
    <Text style={styles.text}>
      There was a connection error, please try again later
    </Text>
  </View>
);

export default Error;
