import { addPhotoUrl, directorExtractor } from '../../helpers/movieHelpers';
const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.TMDB_BASE_URL;

const retrieveMovieDetail = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}${API_KEY}&append_to_response=credits`,
  );
  const movieDetail = await response.json();

  movieDetail.backdrop_path = addPhotoUrl(movieDetail.backdrop_path);
  movieDetail.poster_path = addPhotoUrl(movieDetail.poster_path, 'low');

  movieDetail.credits.cast.forEach((element) => {
    element.profile_path = addPhotoUrl(element.profile_path, 'low');
  });
  movieDetail.credits.crew.forEach((element) => {
    element.profile_path = addPhotoUrl(element.profile_path, 'low');
  });

  const director = directorExtractor(movieDetail);
  if (director) movieDetail.director = director;
  return movieDetail;
};

export default retrieveMovieDetail;
