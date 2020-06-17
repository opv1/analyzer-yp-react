import React, { Component } from 'react';
import classes from './Search.module.scss';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Search extends Component {
  render() {
    return (
      <section className={classes.Search} style={this.props.color}>
        <div className={classes.Wrapper}>
          <div className={classes.Block}>
            <h1 className={classes.Caption}>Что в мире творится?</h1>
            <h2 className={classes.Description}>
              Введите в поиске любую тему и узнайте, насколько популярной она
              была в новостях за прошедшую неделю.
            </h2>
          </div>
          <Form>
            <Input />
            <Button type='ButtonSearch'>Искать</Button>
          </Form>
        </div>
      </section>
    );
  }
}

export default Search;
