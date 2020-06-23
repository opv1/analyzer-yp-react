import React, { Component } from 'react';
import classes from './Search.module.scss';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Search extends Component {
  state = {
    keyWord: '',
  };

  componentDidUpdate(prevProps) {
    if (this.props.keyWord !== prevProps.keyWord) {
      return this.setState({
        keyWord: this.props.keyWord,
      });
    }
  }

  handleChange = (event) => {
    const input = event.target;

    if (input.validity.valueMissing) {
      input.setCustomValidity('Нужно ввести ключевое слово');
    } else if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity('Должно быть от 2 до 10 символов');
    } else if (input.validity.patternMismatch) {
      input.setCustomValidity('Необходимо вводить кириллицей');
    } else {
      input.setCustomValidity('');
    }

    this.setState({
      keyWord: input.value,
    });
  };

  render() {
    return (
      <section className={classes.Search}>
        <div className={classes.Wrapper}>
          <div className={classes.Block}>
            <h1 className={classes.Caption}>Что в мире творится?</h1>
            <h2 className={classes.Description}>
              Введите в поиске любую тему и узнайте, насколько популярной она
              была в новостях за прошедшую неделю.
            </h2>
          </div>
          <Form onSubmit={(event) => this.props.searchNews(event)}>
            <Input
              onChange={(event) => this.handleChange(event)}
              value={this.state.keyWord}
              name={'search'}
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
  }
}

export default Search;
