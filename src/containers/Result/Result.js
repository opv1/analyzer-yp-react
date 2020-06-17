import React, { Component } from 'react';
import classes from './Result.module.scss';
import Button from '../../components/UI/Button/Button';
import { NavLink } from 'react-router-dom';

class Result extends Component {
  render() {
    return (
      <section className={classes.Result}>
        <div className={classes.Wrapper}>
          <div className={classes.Block}>
            <h2 className={classes.Caption}>Результаты поиска</h2>
            <NavLink className={classes.Link} to='/analytics'>
              Посмотреть аналитику&nbsp;
              <span className={classes.Arrow}>&#8250;</span>
            </NavLink>
          </div>
          <div className={classes.Container}></div>
          <Button type='ButtonResult'>Показать еще</Button>
        </div>
      </section>
    );
  }
}

export default Result;
