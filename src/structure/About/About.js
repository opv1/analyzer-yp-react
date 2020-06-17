import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import { axiosCommits } from '../../hoc/Axios/Axios';
import Customer from '../../containers/Customer/Customer';
import Stack from '../../containers/Stack/Stack';
import Author from '../../containers/Author/Author';
import Commits from '../../containers/Commits/Commits';

class About extends Component {
  async componentDidMount() {
    try {
      const responseCommits = await axiosCommits.get(
        'https://api.github.com/repos/opv1/yp-graduate-work-react/commits?'
      );
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
        <Commits />
      </Auxiliary>
    );
  }
}

export default About;
