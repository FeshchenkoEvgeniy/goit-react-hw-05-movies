import Movies from 'pages/Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import { Layout } from './Layout/Layout';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
};
