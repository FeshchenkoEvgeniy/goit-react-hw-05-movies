import { getMovieCredits } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId)
      .then(response => setActors(response.cast))
      .catch(error => console.log(error));
  }, []);

  return (
    <section>
      <ul>
        {actors.map(({id, profile_path, name, character }) => (
          <li key={id}>
            <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : 'https://via.placeholder.com/100x150'
          }
          alt="movie"
          width="100px"
        />
            <h2>{name}</h2>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
