import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { css } from 'glamor';
import classes from './Header.module.scss';

const Header = () => {
  const { color, boxShadow } = useSelector((state) => state.layout);

  const styles = {
    color,
    borderBottom: `2px solid ${color}`,
    boxShadow,
    hover: {
      ':hover': { color },
    },
  };

  return (
    <header className={classes.Header} style={{ boxShadow: styles.boxShadow }}>
      <div className={classes.Wrapper}>
        <Link
          className={classes.Caption}
          style={{ color: styles.color }}
          to='/yp-graduate-work-react/'
        >
          NewsAnalyzer
        </Link>
        <nav className={classes.Navigation}>
          <ul className={classes.List}>
            <li className={classes.Item}>
              <NavLink
                exact
                className={classes.Link}
                {...css(styles.hover)}
                activeStyle={{
                  color: styles.color,
                  borderBottom: styles.borderBottom,
                }}
                to='/yp-graduate-work-react/'
              >
                Главная
              </NavLink>
            </li>
            <li className={classes.Item}>
              <NavLink
                className={classes.Link}
                {...css(styles.hover)}
                activeStyle={{
                  color: styles.color,
                  borderBottom: styles.borderBottom,
                }}
                to='/yp-graduate-work-react/about'
              >
                О проекте
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
