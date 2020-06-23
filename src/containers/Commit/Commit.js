import React from 'react';
import classes from './Commit.module.scss';
import { formateDateLocal } from '../../scripts/utils/utils';

const Commit = ({ children }) => {
  const { author, message } = children.commit;
  const { avatar_url } = children.committer;
  const date = formateDateLocal(new Date(author.date), {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className={classes.Commit}>
      <p className={classes.Date}>{date}</p>
      <div className={classes.Author}>
        <div
          className={classes.Avatar}
          style={{ backgroundImage: `url(${avatar_url})` }}
        ></div>
        <div className={classes.Info}>
          <p className={classes.Name}>{author.name}</p>
          <p className={classes.Email}>{author.email}</p>
        </div>
      </div>
      <p className={classes.Description}>{message}</p>
    </div>
  );
};

export default Commit;
