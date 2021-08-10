/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Details from '../containers/Details';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (

  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detalles/:id' component={Details} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>

);

export default App;
