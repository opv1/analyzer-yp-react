import React from 'react';
import classes from './Coincide.module.scss';

const Coincide = ({ analytics }) => {
  const { amountKeyWord, totalResults, keyWord } = analytics;

  return (
    <div className={classes.Coincide}>
      <div className={classes.Wrapper}>
        <h2 className={classes.Caption}>Вы спросили: "{keyWord}"</h2>
        <ul className={classes.List}>
          <li className={classes.Item}>
            Новостей за неделю:&nbsp;
            <span className={classes.Count}>{totalResults}</span>
          </li>
          <li className={classes.Item}>
            Упоминаний в заголовках:&nbsp;
            <span className={classes.Count}>{amountKeyWord}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Coincide;
