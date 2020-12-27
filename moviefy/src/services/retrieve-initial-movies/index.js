const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.TMDB_BASE_URL;
import { addPhotoUrl } from '../../helpers/movieHelpers';

const retrieveInitialMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular${API_KEY}`);
  let parseResponse = await response.json();

  parseResponse.results.forEach((movie) => {
    movie.poster_path = addPhotoUrl(movie.poster_path, 'low');
  });

  return parseResponse.results;
};

export default retrieveInitialMovies;
