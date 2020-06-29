import React from 'react';
import classes from './Graphic.module.scss';

const Graphic = ({ analytics }) => {
  const columnY = [];
  const columnX = [];

  for (let i = 0; i < analytics.presentWeek.length; i += 1) {
    columnY.push(
      <p className={classes.ColumnY} key={i}>
        {analytics.presentWeek[i].dayNumber},&nbsp;
        {analytics.presentWeek[i].dayName}
      </p>
    );

    columnX.push(
      <p
        className={classes.ColumnX}
        key={i}
        style={{ width: `${analytics.presentWeek[i].widthPercent}%` }}
      >
        {analytics.presentWeek[i].newsCount}
      </p>
    );
  }

  return (
    <section className={classes.Graphic}>
      <div className={classes.Wrapper}>
        <h3 className={classes.Caption}>Аналитика по дням</h3>
        <div className={classes.Block}>
          <div className={classes.Head}>
            <p className={classes.Date}>Дата ({analytics.presentMonth})</p>
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
            <div className={classes.ColumnsY}>{columnY}</div>
            <div className={classes.ColumnsX}>{columnX}</div>
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
};

export default Graphic;
