import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import MovieList from '../../views/MovieList';
import styles from './styles';
import retrieveInitialMovies from '../../services/retrieve-initial-movies';
import Header from '../../views/Header/Header';
import TMDB from '../../views/TMDB/TMDB';
import PreHome from '../../views/PreHome/PreHome';
import Error from '../../views/Error/Error';

const Home = ({ navigation }) => {
  const [popularMovies, setPopularMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setPopularMovies(await retrieveInitialMovies());
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [setPopularMovies]);

  return (
    <ScrollView style={styles.scrollView}>
      {loading ? (
        <PreHome />
      ) : error ? (
        <Error />
      ) : (
        <View>
          <Header text="Moviefy" />
          <View styles={styles.list}>
            {popularMovies && (
              <MovieList
                navigation={navigation}
                list={popularMovies}></MovieList>
            )}
          </View>
          <TMDB />
        </View>
      )}
    </ScrollView>
  );
};

export default Home;
