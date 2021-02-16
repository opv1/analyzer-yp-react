import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../containers/Header/Header'
import Main from '../../containers/Main/Main'
import Footer from '../../containers/Footer/Footer'
import { setStylesLayout } from '../../store/actions/actions'
import classes from './Layout.module.scss'

function Layout(props) {
  const { typeLayout } = useSelector((state) => state.layout)
  const dispatch = useDispatch()
  const pathname = props.location.pathname

  useEffect(() => {
    dispatch(setStylesLayout(pathname))
    // eslint-disable-next-line
  }, [pathname])

  useEffect(() => {
    dispatch(setStylesLayout(pathname))
    // eslint-disable-next-line
  }, [])

  const cls = [classes.Layout, classes[typeLayout]]

  return (
    <div className={cls.join(' ')}>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
