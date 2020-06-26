import React from 'react';
import classes from './Result.module.scss';
import Article from '../Article/Article';
import Button from '../../components/UI/Button/Button';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleClick } from '../../store/actions/actions';

const Result = ({ news, fromVisible, toVisible, analytics, handleClick }) => {
  return (
    <section className={classes.Result}>
      <div className={classes.Wrapper}>
        <div className={classes.Block}>
          <h2 className={classes.Caption}>Результаты поиска</h2>
          <NavLink
            className={classes.Link}
            to={{
              pathname: '/yp-graduate-work-react/analytics',
              analytics: analytics,
            }}
          >
            Посмотреть аналитику&nbsp;
            <span className={classes.Arrow}>&#8250;</span>
          </NavLink>
        </div>
        <div className={classes.Container}>
          {news.articles.slice(fromVisible, toVisible).map((article, index) => {
            return <Article key={index + 1}>{article}</Article>;
          })}
        </div>
        <Button onClick={handleClick} type='ButtonResult'>
          Показать еще
        </Button>
      </div>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    news: state.home.news,
    fromVisible: state.home.fromVisible,
    toVisible: state.home.toVisible,
    analytics: state.home.analytics,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => dispatch(handleClick()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
