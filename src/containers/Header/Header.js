import React, { Component } from 'react';
import classes from './Header.module.scss';
import { css } from 'glamor';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
  state = {
    color: null,
    boxShadow: null,
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      if (this.props.type === null) {
        this.setState({
          color: '#000000',
          boxShadow: 'inset 0px -1px 0px #d1d2d6',
        });
      } else {
        this.setState({
          color: '#ffffff',
          boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.2)',
        });
      }
    }
  }

  componentDidMount() {
    if (this.props.type === 'withBackground') {
      this.setState({
        color: '#ffffff',
        boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.2)',
      });
    } else {
      this.setState({
        color: '#000000',
        boxShadow: 'inset 0px -1px 0px #d1d2d6',
      });
    }
  }

  render() {
    const style = {
      NavLink: {
        ':hover': { color: this.state.color },
      },
    };

    return (
      <header
        className={classes.Header}
        style={{
          boxShadow: this.state.boxShadow,
        }}
      >
        <div className={classes.Wrapper}>
          <Link
            className={classes.Caption}
            style={{ color: this.state.color }}
            to='/yp-graduate-work-react'
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
                    color: this.state.color,
                    borderBottom: `2px solid ${this.state.color}`,
                  }}
                  to='/yp-graduate-work-react'
                >
                  Главная
                </NavLink>
              </li>
              <li className={classes.Item}>
                <NavLink
                  className={classes.Link}
                  {...css(style.NavLink)}
                  activeStyle={{
                    color: this.state.color,
                    borderBottom: `2px solid ${this.state.color}`,
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
  }
}

export default Header;
