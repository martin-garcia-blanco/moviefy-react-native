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
          imageUrl={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          title={movie.title}
          size="medium"
          id={movie.id}
        />
      ))}
    </View>
  );
};

export default MovieList;
