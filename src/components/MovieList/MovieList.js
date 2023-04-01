import { Link, useLocation, Outlet } from "react-router-dom";
import { Suspense } from 'react';
import PropTypes from 'prop-types';
import {Loader} from 'components/Loader/Loader';

export const MovieList = ({ movies }) => {

  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : 'https://via.placeholder.com/250x375'
              }
              alt="movie"
              width="250px"
            />
            <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
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