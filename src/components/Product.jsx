import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Home.scss';

const Product = ({ _id, title, price, ulrpicture }) => (

  <div className='carousel__item-Search'>
    <div className='carousel__item-Search-img'>
      <Link to={`/detalles/${_id}`}>
        <img src={ulrpicture} width='284' height='284' alt={title} />
      </Link>
    </div>
    <div className='carousel__item-Search-details'>
      <p>{price}</p>
      <p>{title}</p>
    </div>
  </div>

);

export default Product;
