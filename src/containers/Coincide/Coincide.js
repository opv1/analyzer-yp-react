import React from 'react';
import classes from './Coincide.module.scss';

const Coincide = ({ analytics }) => {
  return (
    <div className={classes.Coincide}>
      <div className={classes.Wrapper}>
        <h2 className={classes.Caption}>Вы спросили: "{analytics.keyWord}"</h2>
        <ul className={classes.List}>
          <li className={classes.Item}>
            Новостей за неделю:&nbsp;
            <span className={classes.Count}>{analytics.totalResults}</span>
          </li>
          <li className={classes.Item}>
            Упоминаний в заголовках:&nbsp;
            <span className={classes.Count}>{analytics.amountKeyWord}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Coincide;
