import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Footer.module.scss'
import logoGitHub from '../../images/github.svg'
import logoFB from '../../images/fb.svg'

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Wrapper}>
        <p className={classes.Copyright}>&copy; 2020. Павел Овечкин</p>
        <nav className={classes.Navigation}>
          <ul className={classes.List}>
            <li className={classes.Item}>
              <NavLink className={classes.Link} to='/analyzer-app-yp-react/'>
                Главная
              </NavLink>
            </li>
            <li className={classes.Item}>
              <NavLink
                className={classes.Link}
                to='/analyzer-app-yp-react/about'
              >
                О проекте
              </NavLink>
            </li>
            <li className={classes.Item}>
              <a
                className={classes.Link}
                href='https://praktikum.yandex.ru/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Яндекс.Практикум
              </a>
            </li>
          </ul>
        </nav>
        <div className={classes.Social}>
          <a
            className={classes.Reference}
            href='https://github.com/opv1/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className={classes.Icon} src={logoGitHub} alt='GitHub' />
          </a>
          <a
            className={classes.Reference}
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className={classes.Icon} src={logoFB} alt='Facebook' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
