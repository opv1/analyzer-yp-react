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
          <Route path='/yp-graduate-work-react' exact component={Home} />
          <Route path='/yp-graduate-work-react/about' component={About} />
          <Route
            path='/yp-graduate-work-react/analytics'
            component={Analytics}
          />
        </Layout>
      </Switch>
    );
  }
}

export default App;
