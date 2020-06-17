import React, { Component } from 'react';
import classes from './Commits.module.scss';

class Commits extends Component {
  render() {
    return (
      <section className={classes.Commits}>
        <div className={classes.Wrapper}>
          <div className={classes.Block}>
            <h2 className={classes.Caption}>История коммитов из GitHub</h2>
            <a
              className={classes.Analytics}
              href='https://github.com/opv1/yp-diplom/commits/master/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Открыть в GitHub <span className={classes.Arrow}>&#8250;</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Commits;
