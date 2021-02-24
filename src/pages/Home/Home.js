import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setInitialNews } from '../../store/actions/actions'
import Auxiliary from '../../scripts/Auxiliary/Auxiliary'
import Search from '../../components/Search/Search'
import Error from '../../components/Error/Error'
import Result from '../../components/Result/Result'
import Author from '../../components/Author/Author'
import Loader from '../../components/Loader/Loader'

function Home() {
  const { loading, error, typeError, result } = useSelector(
    (state) => state.home
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem('newsObject')) !== null &&
      JSON.parse(localStorage.getItem('analyticsObject')) !== null
    ) {
      return dispatch(setInitialNews())
    } // eslint-disable-next-line
  }, [])

  return (
    <Auxiliary>
      <Search />
      {loading ? <Loader /> : null}
      {error ? <Error typeError={typeError} /> : null}
      {result ? <Result /> : null}
      <Author />
    </Auxiliary>
  )
}

export default Home
