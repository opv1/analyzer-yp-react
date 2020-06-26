import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Customer from '../../containers/Customer/Customer';
import Stack from '../../containers/Stack/Stack';
import Author from '../../containers/Author/Author';
import Commits from '../../containers/Commits/Commits';
import { connect } from 'react-redux';
import { fetchCommits } from '../../store/actions/actions';

class About extends Component {
  componentDidMount() {
    this.props.fetchCommits();
  }

  render() {
    return (
      <Auxiliary>
        <Customer />
        <Stack />
        <Author />
        <Commits commits={this.props.commits} />
      </Auxiliary>
    );
  }
}

function mapStateToProps(state) {
  return {
    commits: state.about.commits,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCommits: () => dispatch(fetchCommits()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
