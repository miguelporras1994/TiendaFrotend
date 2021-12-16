/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';

import '../assets/styles/components/CrearProduct.scss';
import { connect } from 'react-redux';
import { EditProduct } from '../actions';
import { Link } from 'react-router-dom';

const EditProdut = (props) => {

  const { id } = props.match.params;

  console.log(id)

  const [product, setValues] = useState({
   data:[]
     
  });

  useEffect(() => {
    fetch(`http://localhost:3002/api/products/${id}`)
      .then((Response) => Response.json())
      .then((data) => setValues(data.data));
  }, []);


 
  const handleInput = (event) => {
    setValues({
      ...product,
      [event.target.name]: event.target.value,
    });

  };

  const handleSumbit = (event) => {
    event.preventDefault();
     props.EditProduct(product);
    console.log('handleSumbit');
    console.log(product);

  };



  return product.length === 0 ? <h1>cargando ..</h1> : (
  
      <div className='Container'>
        <h1>Editar Producto </h1>
        <form onSubmit={handleSumbit}>
          <div className='ContentProduct'>
            <p className='title'>Nombre Producto</p>
            <p className='title'>Precio</p>
            <input type='text' name='title' className='from-input' value={product.title} onChange={handleInput}></input>
            <input type='text' name="price" className='from-input' value={product.price}   onChange={handleInput}></input>
        

            <p className='title'>Url de Imagen</p>
          
            <input type='text' name='ulrpicture' className='from-input_url' value={product.ulrpicture} onChange={handleInput}></input>
            
            <p className='title'> Descripcion</p>
             <textarea name="textarea"  className='from-input_despcription' value={product.description} name="description" rows="10" cols="50"  onChange={handleInput}>Write something here</textarea> 

          </div>
          <div className='content-button'>
            <button className='submit-home' type='submit'>
              Editar Producto
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
    EditProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProdut);
