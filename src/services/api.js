import axios from 'axios';

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjY1YjViNzliODJjNDRjOWMyNzQyNjc5YTA0YTExNCIsIm5iZiI6MTczMjU1Mzg5NS4zMjg0MzI2LCJzdWIiOiI2NzNmNTc0ODQ2NTQxYmJjZDM3OWVjM2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5Vao0CkC936qwtx2yAylz71dHemEJ7xRzj-dBkKknHQ';

const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetchTrendingMovies = async () => {
  const response = await api.get('/trending/movie/day');
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await api.get('/search/movie', {
    params: { query },
  });
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await api.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await api.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
