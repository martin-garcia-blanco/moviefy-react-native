import React from 'react';
import { Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

export const GenreItem = ({ genre }) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => console.log(genre.id)}>
      <Image resizeMode="contain" style={styles.image} source={genre.icon} />
      <Text style={styles.text}>{genre.name}</Text>
    </TouchableOpacity>
  );
};

export default GenreItem;
