import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';
import { BiCameraMovie } from 'react-icons/bi';
const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <nav className={s.nav}>
          <NavLink to="/" className={s.link}>
            <BiCameraMovie size="36" className={s.logoIcon} />
          </NavLink>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
        <a
          className={s.tmdbLink}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TMDB link"
        >
          <span className={s.Link}>TMDB</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
