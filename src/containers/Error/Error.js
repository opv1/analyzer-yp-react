import React from 'react'
import logoNotFound from '../../assets/images/not-found.svg'
import classes from './Error.module.scss'

const Error = ({ typeError }) => {
  return (
    <section className={classes.Error}>
      {typeError === 'failedToFound' ? (
        <div className={classes.Block}>
          <img
            className={classes.Icon}
            src={logoNotFound}
            alt='Ничего не найдено'
          />
          <h3 className={classes.Caption}>Ничего не найдено</h3>
          <p className={classes.Text}>
            К сожалению по вашему запросу ничего не найдено.
          </p>
        </div>
      ) : null}

      {typeError === 'failedToFetch' ? (
        <div className={classes.Block}>
          <h3 className={classes.Caption}>Во время запроса произошла ошибка</h3>
          <p className={classes.Text}>
            Возможно, проблема с соединением или сервер недоступен. Подождите
            немного и попробуйте ещё раз.
          </p>
        </div>
      ) : null}
    </section>
  )
}

export default Error
