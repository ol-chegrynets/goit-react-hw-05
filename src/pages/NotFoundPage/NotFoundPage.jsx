import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NotFoundPage.module.css';

const NotFound = () => {
  return (
    <div className={s.notFound}>
      <h2> Ooops, Page is not found</h2>
      <p>The page you are looking for does not exist.</p>
      <NavLink className={s.link} to="/">
        Go to Home
      </NavLink>
    </div>
  );
};

export default NotFound;
