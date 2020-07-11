const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.TMDB_BASE_URL;

const retrieveInitialMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular${API_KEY}`);
  let parseResponse = await response.json();
  return parseResponse.results;
};

export default retrieveInitialMovies;
