import React from 'react';
import classes from './Article.module.scss';
import { formateDateLocal } from '../../scripts/utils/utils';

const Article = ({ children }) => {
  const noImage = 'https://goo.su/1ige';
  const date = formateDateLocal(new Date(children.publishedAt), {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <a
      className={classes.Article}
      href={children.url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className={classes.Card}>
        <div
          className={classes.Image}
          style={{
            backgroundImage: `url(${children.urlToImage || noImage})`,
          }}
        ></div>
        <div className={classes.Info}>
          <div className={classes.Date}>{date}</div>
          <h3 className={classes.Title}>{children.title}</h3>
          <p className={classes.Description}>{children.description}</p>
          <span className={classes.Source}>{children.source.name}</span>
        </div>
      </div>
    </a>
  );
};

export default Article;
