import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import HorizontalSlider from '../HorizontalSlider';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
IoniconIcon.loadFont();
import retrieveMovieDetail from '../../services/retrieve-movie-detail';
import retrieveRecomendatedMovies from '../../services/retrieve-recomendated-movies';

const MovieDetail = ({ navigation, route }) => {
  const {
    params: { movieId },
  } = route;

  const [movie, setMovie] = useState();
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    (async () => {
      setMovie(await retrieveMovieDetail(movieId));
      setSimilarMovies(await retrieveRecomendatedMovies(movieId));
    })();
  }, [movieId, setMovie, setSimilarMovies]);

  return (
    <ScrollView style={styles.rootView}>
      {movie ? (
        <>
          <View style={styles.imageContainer}>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,1)']}
              style={styles.gradient}
              start={{ x: 0, y: 0.6 }}
              end={{ x: 0, y: 1 }}></LinearGradient>

            <Image
              source={{
                uri: movie.backdrop_path,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.specs}>
              <View style={styles.specsText}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.specsTextItem}>
                  {movie.release_date.substring(0, 4)}
                </Text>
                <Text style={[styles.specsTextItem, styles.runtime]}>
                  {movie.runtime} min
                </Text>
                {movie.director ? (
                  <Text style={[styles.specsTextItem, styles.director]}>
                    {movie.director}
                  </Text>
                ) : null}
                {movie.original_title !== movie.title ? (
                  <Text style={[styles.specsTextItem, styles.director]}>
                    Original title {movie.original_title}
                  </Text>
                ) : null}
                <Text style={[styles.specsTextItem, styles.director]}>
                  Language {movie.original_language}
                </Text>
              </View>
              <View style={styles.rating}>
                <IoniconIcon
                  name="md-star"
                  size={24}
                  color="yellow"
                  style={styles.ratingStar}
                />
                <Text style={styles.ratingText}>{movie.vote_average}</Text>
              </View>
            </View>
            <Text style={styles.overview}>{movie.overview}</Text>
          </View>
          <View style={styles.genres}>
            {movie.genres.map((genre) => (
              <TouchableOpacity
                key={genre.id}
                style={styles.genreTouchable}
                onPress={() =>
                  navigation.push('GenreMovies', {
                    genreId: genre.id,
                    genreName: genre.name,
                  })
                }>
                <Text style={styles.genreText}>{genre.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Add to List</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.subtitle}>
            <Text style={styles.subtitleText}>Cast</Text>
          </View>
          <HorizontalSlider
            sliderType="cast"
            navigation={navigation}
            list={movie.credits.cast}
          />

          {similarMovies.length ? (
            <>
              <View style={styles.subtitle}>
                <Text style={styles.subtitleText}>Similar content</Text>
              </View>
              <HorizontalSlider
                sliderType="movies"
                navigation={navigation}
                list={similarMovies}
              />
            </>
          ) : null}
        </>
      ) : null}
    </ScrollView>
  );
};

export default MovieDetail;
