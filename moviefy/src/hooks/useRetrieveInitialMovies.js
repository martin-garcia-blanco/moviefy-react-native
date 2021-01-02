import { useState, useEffect } from 'react';
import retrieveInitialMovies from '../services/retrieve-initial-movies';

const useRetrieveInitialMovies = () => {
  const [popularMovies, setPopularMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setPopularMovies(await retrieveInitialMovies());
        setTimeout(() => setLoading(false), 500);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [setPopularMovies]);

  return [popularMovies, loading, error];
};

export default useRetrieveInitialMovies;
