const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.TMDB_BASE_URL;

const retrieveNetworkContent = async (id) => {
  const response = await fetch(
    `${BASE_URL}/discover/tv${API_KEY}&with_networks=${id}&year=2020`,
  );
  let parseResponse = await response.json();
  return parseResponse.results;
};

export default retrieveNetworkContent;

//https://api.themoviedb.org/3/discover/tv?api_key=b05aec8430b87f17a0b7a0ba24275a25
213;
