import React from 'react'
import classes from './Stack.module.scss'
import logoHTML from '../../assets/images/html.svg'
import logoCSS from '../../assets/images/css.svg'
import logoJS from '../../assets/images/js.svg'
import logoWebpack from '../../assets/images/webpack.svg'

const Stack = () => {
  return (
    <section className={classes.Stack}>
      <div className={classes.Wrapper}>
        <h2 className={classes.Caption}>Используемые технологии</h2>
        <picture className={classes.Technology}>
          <img className={classes.Icon} src={logoHTML} alt='HTML' />
          <img className={classes.Icon} src={logoCSS} alt='CSS' />
          <img className={classes.Icon} src={logoJS} alt='JavaScript' />
          <img className={classes.Icon} src={logoWebpack} alt='Webpack' />
        </picture>
      </div>
    </section>
  )
}

export default Stack
