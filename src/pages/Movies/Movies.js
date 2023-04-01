import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchMovies } from 'api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameMovie = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setMovies([]);
    setLoading(true);

    SearchMovies(nameMovie)
      .then(resp => {
        setMovies(resp.results);
      })
      .catch(error => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [nameMovie]);

  const handleSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
    {error && <h2>{error.message}</h2>}
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
    </>
  );
};

export default Movies;
