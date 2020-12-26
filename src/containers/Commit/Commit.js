import React from 'react'
import classes from './Commit.module.scss'
import { formateDateLocal } from '../../scripts/utils/utils'

const Commit = ({ children }) => {
  const date = formateDateLocal(new Date(children.commit.author.date), {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className={classes.Commit}>
      <p className={classes.Date}>{date}</p>
      <div className={classes.Author}>
        <div
          className={classes.Avatar}
          style={{ backgroundImage: `url(${children.committer.avatar_url})` }}
        ></div>
        <div className={classes.Info}>
          <p className={classes.Name}>{children.commit.author.name}</p>
          <p className={classes.Email}>{children.commit.author.email}</p>
        </div>
      </div>
      <p className={classes.Description}>{children.commit.message}</p>
    </div>
  )
}

export default Commit
