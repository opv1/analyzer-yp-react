import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { handleClick } from '../../store/actions/actions'
import Article from '../Article/Article'
import Button from '../UI/Button/Button'
import { BASE_URL } from '../../constants'
import classes from './Result.module.scss'

const Result = () => {
  const { news, fromVisible, toVisible, analytics } = useSelector(
    (state) => state.home
  )
  const dispatch = useDispatch()

  return (
    <section className={classes.Result}>
      <div className={classes.Wrapper}>
        <div className={classes.Block}>
          <h2 className={classes.Caption}>Результаты поиска</h2>
          <NavLink
            className={classes.Link}
            to={{
              pathname: `${BASE_URL}analytics`,
              analytics: analytics,
            }}
          >
            Посмотреть аналитику&nbsp;
            <span className={classes.Arrow}>&#8250;</span>
          </NavLink>
        </div>
        <div className={classes.Container}>
          {news.articles.slice(fromVisible, toVisible).map((article, index) => {
            return <Article key={index + 1}>{article}</Article>
          })}
        </div>
        <Button onClick={() => dispatch(handleClick())} type='ButtonResult'>
          Показать еще
        </Button>
      </div>
    </section>
  )
}

export default Result
