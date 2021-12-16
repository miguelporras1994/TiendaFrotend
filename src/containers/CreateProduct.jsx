/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-multi-spaces */
/* eslint-disable react/destructuring-assignment */

import React,  { useState}  from 'react';
import { connect } from 'react-redux';
import { CreateProducts } from '../actions'
import { Link } from 'react-router-dom';

import '../assets/styles/components/CrearProduct.scss';

const CreateProduct = (props) => {

  const [itemNit, setValues] = useState({

  });

  const handleInput = (event) => {
    console.log(event)
    setValues({
      ...itemNit,
      [event.target.name]: event.target.value,
    });

  };

  const handleSumbit = (event) => {
    event.preventDefault();
     props.CreateProducts(itemNit);
    console.log(itemNit);

  };

  return  (
 
    <div className='Container'>
     
        <h1>Crear Producto</h1>
        <form onSubmit={handleSumbit}>
        <div className='ContentProduct'>
         <p  className='title'>Titulo</p> <p className='title'> Precio</p>
        <input type='text' className='from-input' name='title' onChange={handleInput}></input>
        <input type='text' className='from-input' name="price" onChange={handleInput}></input>
        <p> Url de la Imagen </p>
        <input type='text' name='ulrpicture'   className='from-input_url' onChange={handleInput}></input>
         <p>Descripcion </p>
       <textarea name="textarea" name="description" rows="10" cols="50" className='from-input_despcription'  onChange={handleInput}>Escribe la Despcripcion</textarea> 
       </div>
    
       <div className='content-button'>
          <button className='submit-home' type='submit'>
             Crear Productos
          </button>
          <Link to={`/admin`}>
          <button className='submit-home submit-back'>
             Volver
          </button>
          </Link>
        </div>
     </form>
  
     </div>

  );

};



const mapDispatchToProps = {
  CreateProducts,
};

export default connect(null, mapDispatchToProps)(CreateProduct);

