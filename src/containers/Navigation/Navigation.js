import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../constants'
import classes from './Navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <div className={classes.Wrapper}>
        <Link className={classes.Link} to={`${BASE_URL}`}>
          Главная&nbsp;
        </Link>
        <p className={classes.Link}>/&nbsp;Аналитика</p>
      </div>
    </nav>
  )
}

export default Navigation
