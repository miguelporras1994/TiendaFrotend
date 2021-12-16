/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-multi-spaces */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import ContentDetails from '../components/ContentDetails';
import DescriptionDetails from '../components/DescriptionDetails';
import '../assets/styles/components/Details.scss';
import UseInitialState from '../hooks/UseInitialState';

const Details = (props) => {
  const { id } = props.match.params;
  console.log(id);
  const product = UseInitialState(`http://localhost:3002/api/products/${id}`);
  console.log(product.data);
  return product.length === 0 ? <h1>cargando ..</h1> : (
    <>
      <div className='Container'>
        <section className='content'>
          <ContentDetails {...product.data} />
          <DescriptionDetails {...product.data} />
        </section>
      </div>
    </>
  );

};

export default Details;
