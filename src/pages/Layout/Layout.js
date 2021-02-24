import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setStylesLayout } from '../../store/actions/actions'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
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
