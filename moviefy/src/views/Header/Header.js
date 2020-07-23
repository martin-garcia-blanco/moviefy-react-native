import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const Header = ({ text }) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default Header;
