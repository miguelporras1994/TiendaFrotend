/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import ContainerProduct from '../components/ContainerProduct';
import Productadmin from '../components/Productadmin'
import '../assets/styles/components/Home.scss';
import '../assets/App.scss';
import { Link } from 'react-router-dom';
import { SaveSearch } from '../actions';

const Admin = (props) => {

  const setValues = (event) => {
    console.log(event);
   
    if(event === null){
    useEffect(() => {
     fetch(`http://localhost:3002/api/products`)
       .then((Response) => Response.json())
       .then((data) => props.SaveSearch(data.data));
   }, []);
 }
 else{
   props.SaveSearch(event);
 }
};


if(props.Result.length ===  0 ){
let local = window.localStorage.getItem('text')
setValues(JSON.parse(local))
}


  return props.Result.length  == 0 ? <h1>cargando ..</h1> : (
    <> 
    
      <div className='Container'>
      <Link to={`/crearproducto`}>
      <button className='ButtonCreate' >Crear Producto</button>
      </Link>
      
        <section className='carousel_Search'>
          <Filter />
          <ContainerProduct>
            {props.Result.map(item => <Productadmin key={item._id} {...item} />)}
          </ContainerProduct>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    Result: state.result,
  };
};

const mapDispatchToProps = {
  SaveSearch, 
};


export default connect(mapStateToProps, mapDispatchToProps)(Admin);
