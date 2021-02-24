import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCommits } from '../../store/actions/actions'
import Auxiliary from '../../scripts/Auxiliary/Auxiliary'
import Customer from '../../components/Customer/Customer'
import Stack from '../../components/Stack/Stack'
import Author from '../../components/Author/Author'
import Commits from '../../components/Commits/Commits'

function About() {
  const { commits } = useSelector((state) => state.about)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCommits())
    // eslint-disable-next-line
  }, [])

  return (
    <Auxiliary>
      <Customer />
      <Stack />
      <Author />
      <Commits commits={commits} />
    </Auxiliary>
  )
}

export default About
