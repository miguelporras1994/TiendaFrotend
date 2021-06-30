/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import ContainerProduct from '../components/ContainerProduct';
import Product from '../components/Product';
import '../assets/styles/components/Home.scss';
import '../assets/App.scss';
import UseInitialState from '../hooks/UseInitialState';

const App = () => {

  const product = UseInitialState('http://localhost:3002/api/products');
  console.log(product);

  return product.length === 0 ? <h1>cargando ..</h1> : (
    <div className='App'>
      <Header />
      <div className='Container'>
        <section className='carousel_Search'>
          <Filter />
          <ContainerProduct>
            {product.data.map((items) => <Product key={items.id} {...items} />)}
          </ContainerProduct>
        </section>
      </div>

    </div>
  );
};

export default App;
