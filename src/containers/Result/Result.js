import React, { Component } from 'react';
import classes from './Result.module.scss';
import Article from '../Article/Article';
import Button from '../../components/UI/Button/Button';
import { NavLink } from 'react-router-dom';

class Result extends Component {
  state = {
    fromVisible: 0,
    toVisible: 3,
  };

  moreNews = () => {
    this.setState((prevState) => {
      return { toVisible: prevState.toVisible + 3 };
    });
  };

  render() {
    return (
      <section className={classes.Result}>
        <div className={classes.Wrapper}>
          <div className={classes.Block}>
            <h2 className={classes.Caption}>Результаты поиска</h2>
            <NavLink
              className={classes.Link}
              to={{
                pathname: '/yp-graduate-work-react/analytics',
                analytics: this.props.analytics,
              }}
            >
              Посмотреть аналитику&nbsp;
              <span className={classes.Arrow}>&#8250;</span>
            </NavLink>
          </div>
          <div className={classes.Container}>
            {this.props.news.articles
              .slice(this.state.fromVisible, this.state.toVisible)
              .map((article, index) => {
                return <Article key={index + 1}>{article}</Article>;
              })}
          </div>
          <Button onClick={this.moreNews} type='ButtonResult'>
            Показать еще
          </Button>
        </div>
      </section>
    );
  }
}

export default Result;
