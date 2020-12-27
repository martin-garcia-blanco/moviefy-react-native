import React from 'react';
import { View } from 'react-native';
import Logo from '../../assets/images/tmdb-atribution-logo.svg';
import styles from './styles';
import { widthScreen } from '../../helpers/GlobalStyles';

const logoWidth = widthScreen - widthScreen * 0.2;

const TMDB = () => {
  return (
    <View style={styles.wrapper}>
      <Logo height={100} width={logoWidth} />
    </View>
  );
};

export default TMDB;
