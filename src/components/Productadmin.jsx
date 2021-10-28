import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Home.scss';
// import Edit from '../assets/static/editar.png';
import logo from '../assets/static/Mitienda.png';

const Productadmin = ({ _id, title, price, ulrpicture }) => (

  <div className='carousel__item-Search'>
    <div className='carousel__item-Search-img'>
      <Link to={`/detalles/${_id}`}>
        <img src={ulrpicture} width='284' height='284' alt={title} />
      </Link>
    </div>
   
    <div className='carousel__item-Search-details'>
    <Link to={`/editarproducto/${_id}`}>
    <img
                className="carousel-item__details--img"
                src={logo}
                alt="Plus Icon"
                width= "50px"
                // onClick={handleSetFavorite}
            />
            </Link>
      <p>{price}</p>
      <p>{title}</p>
    </div>
  </div>

);

export default Productadmin;