/* eslint-disable react/button-has-type */
import React from 'react';
import '../assets/styles/components/Details.scss';

const DescriptionDetails = ({ title, price }) => (

  <div className='content_detail-description-side'>
    <div className='content_detail-description-side-border'>

      <h1>
        <p className='content_detail-description-side-title'>
          {title}
        </p>
      </h1>

      <p className='content_detail-description-side-price'>
        {price}
      </p>
      <p>Talla :</p>

      <p>Sockt Diponible</p>
      <p>Cantidad:</p>
      <div>
        <button className='content_detail-description-tobuy'>Comprar ahora</button>
        <button className='content_detail-description-add'>Agregar Carro</button>
      </div>
    </div>
  </div>

);

export default DescriptionDetails;
