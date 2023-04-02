import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getDetailsMovies } from 'api';
import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from 'components/Loader/Loader';
import {
  MovieDetailsList,
  GenreList,
  GenreListItem,
  P,
  List,
  ListItem,
  StyledLink,
  AdditionalDiv,
} from '../MovieDetails/MovieDetails.styled';
const MovieDetails = () => {
  const [detailMovies, setDetailMovies] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movie';

  useEffect(() => {
    getDetailsMovies(movieId)
      .then(response => setDetailMovies(response))
      .catch(error => console.log(error));
  }, [movieId]);

  const {
    poster_path,
    title,
    overview,
    genres = [],
    vote_average = 0,
  } = detailMovies;
  return (
    <main>
      <BackLink to={backLinkHref} />
      <MovieDetailsList>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://via.placeholder.com/250x375'
          }
          alt="movie"
          width="250px"
        />
        <div>
          <h2>{title}</h2>
          <P>User score: {vote_average.toFixed(1)}</P>
          <h3>Overview</h3>
          <P>{overview}</P>
          <h3>Genres</h3>
          <GenreList>
            {genres.map(({ id, name }) => (
              <GenreListItem key={id}>{name}</GenreListItem>
            ))}
          </GenreList>
        </div>
      </MovieDetailsList>
      <AdditionalDiv>
        <h2>Additional information</h2>
        <List>
          <ListItem>
            <StyledLink to="cast" state={{ ...location.state }}>
              Cast
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="reviews" state={{ ...location.state }}>
              Reviews
            </StyledLink>
          </ListItem>
        </List>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AdditionalDiv>
    </main>
  );
};

export default MovieDetails;
