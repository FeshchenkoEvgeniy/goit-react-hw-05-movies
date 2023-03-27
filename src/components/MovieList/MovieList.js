export const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : 'https://via.placeholder.com/960x240'
              }
              alt="movie"
              width="250px"
            />
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
