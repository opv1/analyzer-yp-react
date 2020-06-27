import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Customer from '../../containers/Customer/Customer';
import Stack from '../../containers/Stack/Stack';
import Author from '../../containers/Author/Author';
import Commits from '../../containers/Commits/Commits';
import { fetchCommits } from '../../store/actions/actions';

function About() {
  const { commits } = useSelector((state) => state.about);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommits());
    // eslint-disable-next-line
  }, []);

  return (
    <Auxiliary>
      <Customer />
      <Stack />
      <Author />
      <Commits commits={commits} />
    </Auxiliary>
  );
}

export default About;
