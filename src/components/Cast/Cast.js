import { getMovieCredits } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastListItem } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId)
      .then(response => setActors(response.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <section>
      <CastList>
        {actors.map(({ id, profile_path, name, character }) => (
          <CastListItem key={id}>
            <img
              style={{ display: 'inline-block' }}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : 'https://via.placeholder.com/100x150'
              }
              alt="movie"
              width="100px"
            />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </CastListItem>
        ))}
      </CastList>
    </section>
  );
};

export default Cast;
