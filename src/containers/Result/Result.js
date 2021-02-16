import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import classes from './Result.module.scss'
import Article from '../Article/Article'
import Button from '../../components/UI/Button/Button'
import { handleClick } from '../../store/actions/actions'

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
              pathname: '/analytics',
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
