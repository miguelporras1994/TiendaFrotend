/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import ContainerProduct from '../components/ContainerProduct';
import Product from '../components/Product';
import { SaveSearch } from '../actions';
import '../assets/styles/components/Home.scss';
import '../assets/App.scss';



const Home = (props) => {

  const setValues = (event) => {
         console.log("Buscando prueba 2 ")
         console.log(event);
         if(event === null || event.length === 0){
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
  console.log("estoy en el home ")
  console.log(local)
  setValues(JSON.parse(local))
}


  return props.Result.length  == 0 ? <h1>cargando ..</h1> : (
    <> 
        <div className='Container'>
        <section className='carousel_Search'>
          <Filter />
          <ContainerProduct>
            {props.Result.map(item => <Product key={item._id} {...item} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
