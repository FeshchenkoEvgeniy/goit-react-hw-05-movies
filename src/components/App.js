import Movies from 'pages/Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import { Layout } from './Layout/Layout';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
