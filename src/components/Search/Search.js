import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews, handleChange } from '../../store/actions/actions'
import Form from '../UI/Form/Form'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import classes from './Search.module.scss'

const Search = () => {
  const { keyWord } = useSelector((state) => state.home)
  const dispatch = useDispatch()

  return (
    <section className={classes.Search}>
      <div className={classes.Wrapper}>
        <div className={classes.Block}>
          <h1 className={classes.Caption}>Что в мире творится?</h1>
          <h2 className={classes.Description}>
            Введите в поиске любую тему и узнайте, насколько популярной она была
            в новостях за прошедшую неделю.
          </h2>
        </div>
        <Form onSubmit={(event) => dispatch(fetchNews(event))}>
          <Input
            onChange={(event) => dispatch(handleChange(event))}
            value={keyWord}
            name={'input'}
            placeholder={'Введите тему новости'}
            minLength='2'
            maxLength='15'
            pattern='^([А-Яа-яЁ-ё]*)$'
          />
          <Button type='ButtonSearch' name={'button'}>
            Искать
          </Button>
        </Form>
      </div>
    </section>
  )
}

export default Search
