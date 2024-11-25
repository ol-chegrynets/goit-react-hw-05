import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import s from './MovieCast.module.css';
import defaultAvatar from '../../../public/default-avatar.svg';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMovieCast() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchMovieCast(movieId);
        setCasts(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {casts.length > 0 ? (
        <ul className={s.castList}>
          {casts.map(cast => {
            return (
              <li key={cast.cast_id} className={s.castListItem}>
                <img
                  className={s.castImg}
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                      : defaultAvatar
                  }
                  alt={cast.name}
                />
                <div className={s.infoContainer}>
                  <p className={s.castName}>{cast.name}</p>
                  <p className={s.castCharacter}>Character: {cast.character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={s.castName}>There are no casts</p>
      )}
    </>
  );
};

export default MovieCast;
