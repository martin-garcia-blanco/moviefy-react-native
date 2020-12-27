import React from 'react';
import { View, Text } from 'react-native';
import MovieItem from '../MovieItem';
import styles from './styles';

const MovieList = ({ list, navigation }) => {
  return (
    <View style={styles.listContainer}>
      {list.map((movie, index) => (
        <MovieItem
          navigation={navigation}
          key={index}
          size="medium"
          movie={movie}
        />
      ))}
    </View>
  );
};

export default MovieList;
