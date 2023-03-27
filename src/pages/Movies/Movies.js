import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchMovies } from 'api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(movies);

  const onSubmit = value => {
    setSearchValue(value);
  };

  useEffect(() => {
    setIsLoading(true);
    SearchMovies(searchValue)
      .then(response => setMovies(response.results))
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchValue]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <MovieList movies={movies} />
      {isLoading && <Loader />}
    </>
  );
};

export default Movies;
