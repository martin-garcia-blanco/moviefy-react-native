import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { logoUrl } from '../../helpers/constants';
import { logoColor } from '../../helpers/GlobalStyles';
import styles from './styles';

const PreHome = () => (
  <View style={styles.wrapper}>
    <Image resizeMode="contain" source={logoUrl} style={styles.image} />
    <ActivityIndicator size="large" color={logoColor} style={styles.spinner} />
  </View>
);

export default PreHome;
