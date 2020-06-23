import React from 'react';
import './App.module.scss';
import Layout from './structure/Layout/Layout';
import Home from './structure/Home/Home';
import About from './structure/About/About';
import Analytics from './structure/Analytics/Analytics';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path='/yp-graduate-work-react/' component={Home} />
        <Route path='/yp-graduate-work-react/about' component={About} />
        <Route path='/yp-graduate-work-react/analytics' component={Analytics} />
      </Layout>
    </Switch>
  );
};

export default App;
