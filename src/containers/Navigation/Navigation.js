import React from 'react';
import classes from './Navigation.module.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <div className={classes.Wrapper}>
        <Link className={classes.Link} to='/yp-graduate-work-react'>
          Главная&nbsp;
        </Link>
        <p className={classes.Link}>/&nbsp;Аналитика</p>
      </div>
    </nav>
  );
};

export default Navigation;
