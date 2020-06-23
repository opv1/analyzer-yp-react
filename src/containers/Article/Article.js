import React from 'react';
import classes from './Article.module.scss';
import { formateDateLocal } from '../../scripts/utils/utils';

const Article = ({ children }) => {
  const { url, urlToImage, publishedAt, title, description, source } = children;
  const urlToNoImage = 'https://goo.su/1ige';
  const date = formateDateLocal(new Date(publishedAt), {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <a
      className={classes.Article}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className={classes.Card}>
        <div
          className={classes.Image}
          style={{ backgroundImage: `url(${urlToImage || urlToNoImage})` }}
        ></div>
        <div className={classes.Info}>
          <div className={classes.Date}>{date}</div>
          <h3 className={classes.Title}>{title}</h3>
          <p className={classes.Description}>{description}</p>
          <span className={classes.Source}>{source.name}</span>
        </div>
      </div>
    </a>
  );
};

export default Article;
