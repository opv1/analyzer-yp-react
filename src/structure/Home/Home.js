import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import { fetchNews } from '../../hoc/Fetch/Fetch';
import { setDataStorage } from '../../scripts/utils/utils';
import Search from '../../containers/Search/Search';
import Error from '../../containers/Error/Error';
import Result from '../../containers/Result/Result';
import Author from '../../containers/Author/Author';
import Loader from '../../components/Loader/Loader';

class Home extends Component {
  state = {
    loading: false,
    error: false,
    typeError: null,
    result: false,
    news: {},
    analytics: {},
    keyWord: null,
  };

  componentDidMount() {
    if (localStorage.getItem('newsObject') !== null) {
      const news = JSON.parse(localStorage.getItem('newsObject'));
      const analytics = JSON.parse(localStorage.getItem('analyticsObject'));
      const { keyWord } = analytics;

      return this.setState({
        result: true,
        news,
        analytics,
        keyWord,
      });
    }
  }

  searchNews = (event) => {
    event.preventDefault();

    const form = event.target;
    const input = form.elements.search;
    const button = form.elements.button;
    const keyWord = input.value;

    new Promise((resolve) => {
      input.setAttribute('disabled', true);
      button.setAttribute('disabled', true);

      this.setState({
        loading: true,
        error: false,
        result: false,
      });
      resolve(
        fetchNews(keyWord)
          .then((responseNews) => {
            setDataStorage(responseNews, keyWord);

            this.setState({
              loading: false,
              error: false,
              result: true,
              news: responseNews,
            });
          })
          .catch((error) => {
            if (error.message === 'Проблемы на этапе запроса новостей!') {
              return this.setState({
                loading: false,
                error: true,
                typeError: 'failedToFetch',
              });
            }

            if (error.message === 'Ничего не найдено. Нулевой результат!') {
              return this.setState({
                loading: false,
                error: true,
                typeError: 'failedToFound',
              });
            }
          })
          .finally(() => {
            input.removeAttribute('disabled');
            button.removeAttribute('disabled');
          })
      );
    });
  };

  render() {
    return (
      <Auxiliary>
        <Search searchNews={this.searchNews} keyWord={this.state.keyWord} />
        {this.state.loading ? <Loader /> : null}
        {this.state.error ? <Error typeError={this.state.typeError} /> : null}
        {this.state.result ? (
          <Result news={this.state.news} analytics={this.state.analytics} />
        ) : null}
        <Author />
      </Auxiliary>
    );
  }
}

export default Home;
