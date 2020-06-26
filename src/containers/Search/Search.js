import React from 'react';
import classes from './Search.module.scss';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { connect } from 'react-redux';
import { fetchNews, handleChange } from '../../store/actions/actions';

const Search = ({ keyWord, fetchNews, handleChange }) => {
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
        <Form onSubmit={(event) => fetchNews(event)}>
          <Input
            onChange={(event) => handleChange(event)}
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
  );
};

function mapStateToProps(state) {
  return { keyWord: state.home.keyWord };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNews: (event) => dispatch(fetchNews(event)),
    handleChange: (event) => dispatch(handleChange(event)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
