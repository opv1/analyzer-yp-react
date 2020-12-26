import React from 'react'
import classes from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={classes.Loader}>
      <div className={classes.Loading}>
        <div></div>
        <div></div>
      </div>
      <h3 className={classes.Caption}>Идет поиск новостей...</h3>
    </div>
  )
}

export default Loader
