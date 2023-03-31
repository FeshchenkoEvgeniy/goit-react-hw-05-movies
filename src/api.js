import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a9accf560553954898139d3fe730a4a1';

export const TrendingMovies = async () => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=1`
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const SearchMovies = async value => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}`
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
