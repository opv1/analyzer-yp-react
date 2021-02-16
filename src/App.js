import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Analytics from './pages/Analytics/Analytics'
import { BASE_URL } from './constants'
import './App.scss'

function App() {
  return (
    <Switch>
      <Layout>
        <Route exact path={`${BASE_URL}`} component={Home} />
        <Route path={`${BASE_URL}about`} component={About} />
        <Route path={`${BASE_URL}analytics`} component={Analytics} />
      </Layout>
    </Switch>
  )
}

export default App
