import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import MovieList from '../../views/MovieList';
import styles from './styles';
import retrieveInitialMovies from '../../services/retrieve-initial-movies';
import Header from '../../views/Header/Header';

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
      <Header text="Moviefy" />
      <View styles={styles.list}>
        {popularMovies && (
          <MovieList navigation={navigation} list={popularMovies}></MovieList>
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
