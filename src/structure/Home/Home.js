import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Search from '../../containers/Search/Search';
import Error from '../../containers/Error/Error';
import Result from '../../containers/Result/Result';
import Author from '../../containers/Author/Author';
import Loader from '../../components/Loader/Loader';
import { connect } from 'react-redux';
import { setInitialNews } from '../../store/actions/actions';

class Home extends Component {
  componentDidMount() {
    if (
      JSON.parse(localStorage.getItem('newsObject')) !== null &&
      JSON.parse(localStorage.getItem('analyticsObject')) !== null
    ) {
      return this.props.setInitialNews();
    }
  }

  render() {
    return (
      <Auxiliary>
        <Search />
        {this.props.loading ? <Loader /> : null}
        {this.props.error ? <Error typeError={this.props.typeError} /> : null}
        {this.props.result ? <Result /> : null}
        <Author />
      </Auxiliary>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.home.loading,
    error: state.home.error,
    typeError: state.home.typeError,
    result: state.home.result,
    news: state.home.news,
    analytics: state.home.analytics,
    keyWord: state.home.keyWord,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setInitialNews: () => dispatch(setInitialNews()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
