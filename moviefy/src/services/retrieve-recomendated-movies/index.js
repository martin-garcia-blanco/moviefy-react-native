const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.TMDB_BASE_URL;
import { addPhotoUrl } from '../../helpers/movieHelpers';

const retrieveRecomendatedMovies = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/recommendations${API_KEY}`,
  );
  let parseResponse = await response.json();

  parseResponse.results.forEach((movie) => {
    movie.poster_path = addPhotoUrl(movie.poster_path, 'low');
    movie.backdrop_path = addPhotoUrl(movie.backdrop_path, 'low');
  });

  return parseResponse.results;
};

export default retrieveRecomendatedMovies;

// https://api.themoviedb.org/3/movie/671/recommendations?api_key=b05aec8430b87f17a0b7a0ba24275a25
