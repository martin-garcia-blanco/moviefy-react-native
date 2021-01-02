import React from 'react';
import { ScrollView, View } from 'react-native';
import useRetrieveInitialMovies from '../../hooks/useRetrieveInitialMovies';
import Error from '../../views/Error/Error';
import Header from '../../views/Header/Header';
import MovieList from '../../views/MovieList';
import PreHome from '../../views/PreHome/PreHome';
import TMDB from '../../views/TMDB/TMDB';
import styles from './styles';

const Home = ({ navigation }) => {
  const [popularMovies, loading, error] = useRetrieveInitialMovies();

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
