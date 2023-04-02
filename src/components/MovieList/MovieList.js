import { Link, useLocation, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';
import { List, ListItemImage, ListItem, StyledLink } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <List>
        {movies.map(({ id, title, poster_path }) => (
          <ListItem key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <ListItemImage
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : 'https://via.placeholder.com/250x375'
                }
                alt="movie"
              />
              <p>{title}</p>
            </StyledLink>
          </ListItem>
        ))}
      </List>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
