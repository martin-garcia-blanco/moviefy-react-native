const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.TMDB_BASE_URL;
import { addPhotoUrl } from '../../helpers/movieHelpers';

const retrieveMoviesByGenre = async (genreId) => {
  const response = await fetch(
    `${BASE_URL}/discover/movie${API_KEY}&with_genres=${genreId}`,
  );
  let parseResponse = await response.json();

  parseResponse.results.forEach((element) => {
    element.backdrop_path = addPhotoUrl(element.backdrop_path);
    element.poster_path = addPhotoUrl(element.poster_path, 'low');
  });

  return parseResponse.results;
};

export default retrieveMoviesByGenre;
