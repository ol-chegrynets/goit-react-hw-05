import { useEffect, useState } from 'react';
import s from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import { fetchTrendingMovies } from '../../services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    document.title = 'HomeWork | Home';
  }, []);
  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setIsError(false);
        setIsLoading(true);
        const movies = await fetchTrendingMovies();
        setMovies(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setIsLoading(false);
      }
    }
    getTrendingMovies();
  }, []);
  return (
    <div className={s.homeContainer}>
      <h1 className={s.title}>Weekly trending movies</h1>
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
