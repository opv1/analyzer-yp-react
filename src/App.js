import React, { Component } from 'react';
import './App.module.scss';
import Layout from './structure/Layout/Layout';
import Home from './structure/Home/Home';
import About from './structure/About/About';
import Analytics from './structure/Analytics/Analytics';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Layout>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/analytics' component={Analytics} />
        </Layout>
      </Switch>
    );
  }
}

export default App;
