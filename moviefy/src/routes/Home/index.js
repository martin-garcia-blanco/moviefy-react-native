import React, { useEffect, useState } from 'react';
import { ScrollView, processColor } from 'react-native';
import MovieList from '../../views/MovieList';
import styles from './styles';
import retrieveInitialMovies from '../../services/retrieve-initial-movies';

const Home = ({ navigation }) => {
  const [popularMovies, setPopularMovies] = useState();

  useEffect(() => {
    (async () => {
      try {
        setPopularMovies(await retrieveInitialMovies());
      } catch (e) {
        console.log(e);
      }
    })();
  }, [setPopularMovies]);

  return (
    <ScrollView style={styles.scrollView}>
      {popularMovies && (
        <MovieList navigation={navigation} list={popularMovies}></MovieList>
      )}
    </ScrollView>
  );
};

export default Home;
