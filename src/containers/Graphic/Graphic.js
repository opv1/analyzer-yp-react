import React, { Component } from 'react';
import classes from './Graphic.module.scss';

class Graphic extends Component {
  render() {
    return (
      <section className={classes.Graphic}>
        <div className={classes.Wrapper}>
          <h3 className={classes.Caption}>Аналитика по дням</h3>
          <div className={classes.Block}>
            <div className={classes.Head}>
              <p className={classes.Date}></p>
              <p className={classes.Count}>Кол-во упоминаний</p>
            </div>
            <div className={classes.Rows}>
              <p className={classes.Cell}>0</p>
              <p className={classes.Cell}>25</p>
              <p className={classes.Cell}>50</p>
              <p className={classes.Cell}>75</p>
              <p className={classes.Cell}>100</p>
            </div>
            <div className={classes.Columns}>
              <div className={classes.ColumnsY}></div>
              <div className={classes.ColumnsX}></div>
            </div>
            <div className={classes.Rows}>
              <p className={classes.Cell}>0</p>
              <p className={classes.Cell}>25</p>
              <p className={classes.Cell}>50</p>
              <p className={classes.Cell}>75</p>
              <p className={classes.Cell}>100</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Graphic;
