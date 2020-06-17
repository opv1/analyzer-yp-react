import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Search from '../../containers/Search/Search';
import Error from '../../containers/Error/Error';
import Result from '../../containers/Result/Result';
import Author from '../../containers/Author/Author';
import Loader from '../../components/Loader/Loader';

class Home extends Component {
  state = {
    search: false,
    error: false,
    errorType: 'notFound',
  };

  render() {
    return (
      <Auxiliary>
        <Search color={{ color: '#fff' }} />
        {this.state.search ? <Loader errorType={this.state.errorType} /> : null}
        {this.state.error ? <Error errorType={this.state.errorType} /> : null}
        <Result />
        <Author />
      </Auxiliary>
    );
  }
}

export default Home;
