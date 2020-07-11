const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.TMDB_BASE_URL;

const retrieveRecomendatedMovies = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/recommendations${API_KEY}`,
  );
  let parseResponse = await response.json();
  return parseResponse.results;
};

export default retrieveRecomendatedMovies;

// https://api.themoviedb.org/3/movie/671/recommendations?api_key=b05aec8430b87f17a0b7a0ba24275a25
