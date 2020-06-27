import React from 'react';
import classes from './Commits.module.scss';
import Swiper from '../../components/Swiper/Swiper';

const Commits = ({ commits }) => {
  return (
    <section className={classes.Commits}>
      <div className={classes.Wrapper}>
        <div className={classes.Block}>
          <h2 className={classes.Caption}>История коммитов из GitHub</h2>
          <a
            className={classes.Analytics}
            href='https://github.com/opv1/yp-graduate-work-react/commits/master'
            target='_blank'
            rel='noopener noreferrer'
          >
            Открыть в GitHub <span className={classes.Arrow}>&#8250;</span>
          </a>
        </div>
        <div className={classes.List}>
          <Swiper commits={commits} />
        </div>
      </div>
    </section>
  );
};

export default Commits;
