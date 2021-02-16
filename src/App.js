import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.scss'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Analytics from './pages/Analytics/Analytics'

function App() {
  return (
    <Switch>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/analytics' component={Analytics} />
      </Layout>
    </Switch>
  )
}

export default App
