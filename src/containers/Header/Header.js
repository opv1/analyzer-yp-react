import React from 'react';
import classes from './Header.module.scss';
import { css } from 'glamor';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ color, boxShadow }) => {
  const style = {
    NavLink: {
      ':hover': { color },
    },
  };

  return (
    <header
      className={classes.Header}
      style={{
        boxShadow,
      }}
    >
      <div className={classes.Wrapper}>
        <Link
          className={classes.Caption}
          style={{ color }}
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
                {...css(style.NavLink)}
                activeStyle={{
                  color,
                  borderBottom: `2px solid ${color}`,
                }}
                to='/yp-graduate-work-react/'
              >
                Главная
              </NavLink>
            </li>
            <li className={classes.Item}>
              <NavLink
                className={classes.Link}
                {...css(style.NavLink)}
                activeStyle={{
                  color,
                  borderBottom: `2px solid ${color}`,
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

function mapStateToProps(state) {
  return {
    color: state.layout.color,
    boxShadow: state.layout.boxShadow,
  };
}

export default connect(mapStateToProps)(Header);
