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
        <Route exact path='/analyzer-app-yp-react/' component={Home} />
        <Route path='/analyzer-app-yp-react/about' component={About} />
        <Route path='/analyzer-app-yp-react/analytics' component={Analytics} />
      </Layout>
    </Switch>
  )
}

export default App
