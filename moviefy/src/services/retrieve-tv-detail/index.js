const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.TMDB_BASE_URL;

const retrieveTvDetail = async (id) => {
  const response = await fetch(`${BASE_URL}/tv/${id}${API_KEY}`);
  let parseResponse = await response.json();
  return parseResponse.results;
};

export default retrieveTvDetail;

//https://api.themoviedb.org/3/tv/1399?api_key=b05aec8430b87f17a0b7a0ba24275a25
213;
