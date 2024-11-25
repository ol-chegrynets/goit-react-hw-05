import { useEffect, useState, Suspense, useRef } from 'react';
import {
  useParams,
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import Loader from '../../components/Loader/Loader';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  const locationRef = useRef(location.state);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  const backLink = locationRef.current?.from ?? '/movies';

  const handleGoBack = () => {
    navigate(backLink);
  };

  if (!movie) return <Loader />;

  return (
    <div className={s.container}>
      <button className={s.goBackBtn} onClick={handleGoBack}>
        Go back
      </button>
      <div className={s.movieDetails}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={s.movieImg}
        />
        <div className={s.movieInfo}>
          <h2 className={s.movieTitle}>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p className={s.movieScore}>
            User score: {Math.round(movie.vote_average * 10)}%
          </p>
          <h3 className={s.movieOverview}>Overview</h3>
          <p className={s.movieOverviewText}>{movie.overview}</p>
          <h4 className={s.movieGenres}>Genres</h4>
          <p className={s.movieGenresText}>
            {movie.genres.map(genre => genre.name).join(', ') || 'N/A'}
          </p>
        </div>
      </div>
      <div className={s.additionalInfo}>
        <h3>Additional information:</h3>
        <ul className={s.additionalLinks}>
          <li>
            <Link to="cast" state={{ from: backLink }} className={s.link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }} className={s.link}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<MovieCast movieId={movieId} />} />
          <Route path="reviews" element={<MovieReviews movieId={movieId} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
