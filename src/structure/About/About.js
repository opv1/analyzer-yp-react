import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import { axiosCommits } from '../../hoc/Axios/Axios';
import Customer from '../../containers/Customer/Customer';
import Stack from '../../containers/Stack/Stack';
import Author from '../../containers/Author/Author';
import Commits from '../../containers/Commits/Commits';

class About extends Component {
  state = {
    user: 'opv1',
    repository: 'yp-graduate-work-react',
    commits: [],
  };

  async componentDidMount() {
    try {
      const responseCommits = await axiosCommits.get(
        `/repos/${this.state.user}/${this.state.repository}/commits?`
      );

      this.setState({
        commits: responseCommits.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Auxiliary>
        <Customer />
        <Stack />
        <Author />
        <Commits commits={this.state.commits} />
      </Auxiliary>
    );
  }
}

export default About;
