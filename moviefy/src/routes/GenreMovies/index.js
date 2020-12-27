import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import retrieveMoviesByGenre from '../../services/retrieve-movies-by-genre';
import styles from './styles';
import MovieList from '../../views/MovieList';
import { ScrollView } from 'react-native-gesture-handler';

const GenreMovies = ({ navigation, route }) => {
  const {
    params: { genreId },
  } = route;

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    retrieveMoviesByGenre(genreId)
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => console.log(err));
  }, [genreId]);

  return (
    <ScrollView>
      <View styles={styles.list}>
        {movies && (
          <MovieList navigation={navigation} list={movies}></MovieList>
        )}
      </View>
    </ScrollView>
  );
};

export default GenreMovies;
