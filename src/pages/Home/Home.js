import { useState, useEffect } from 'react';
import { TrendingMovies } from 'api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Header } from './Home.styled';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    TrendingMovies()
      .then(response => setMovies(response.results))
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main>
      <Header>Trending today</Header>
      <MovieList movies={movies} />
      {isLoading && <Loader />}
    </main>
  );
};

export default Home;
