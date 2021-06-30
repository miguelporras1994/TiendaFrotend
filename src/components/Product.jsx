import React from 'react';
import '../assets/styles/components/Home.scss';

const Product = ({ title, price, ulrpicture }) => (

  <div className='carousel__item-Search'>
    <div className='carousel__item-Search-img'>
      <img src={ulrpicture} width='284' height='284' alt={title} />
    </div>
    <div className='carousel__item-Search-details'>
      <p>{price}</p>
      <p>{title}</p>
    </div>
  </div>

);

export default Product;
