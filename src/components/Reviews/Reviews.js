import { getMovieReviews } from 'api';
import { P, ListItem } from '../Reviews/Reviews.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieReviews(movieId)
      .then(response => setReviews(response.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <section>
      {reviews.length <= 0 ? (
        <h2>We don't have any revies for the movie.</h2>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <ListItem key={id}>
              <h3>Author: {author}</h3>
              <P>{content}</P>
            </ListItem>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Reviews;
