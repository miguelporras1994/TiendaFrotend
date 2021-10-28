/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Details from '../containers/Details';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Admin from '../containers/Admin'
import CreateProduct  from '../containers/CreateProduct'
import EditProdut from '../containers/EditProdut'

const App = () => (

  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detalles/:id' component={Details} />
        <Route exact path='/admin' component={Admin} />
        <Route exact  path='/crearproducto' component={CreateProduct}/>
        <Route exact  path='/editarproducto/:id' component={EditProdut}/>

        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>

);

export default App;
