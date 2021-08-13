/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Header.scss';
// import Lupa from '../assets/static/lupa.png';
import { connect } from 'react-redux';
import { Search01 } from '../actions';

const Search = (props) => {

  const [itemsearch, setValues] = useState({
    search: '',
  });

  const handleInput = (event) => {
    setValues({
      ...itemsearch,
      [event.target.name]: event.target.value,
    });
  
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    console.log("estoy aqui")
    console.log(itemsearch);
    props.Search01(itemsearch)
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <input
          type='text'
          name='search'
          className='search'
          placeholder='Buscar'
          onChange={handleInput}
        />
        <button className='buttonsearch' type='submit'>
        buscar
          {/* <img
          className='searchimage'
          src={Lupa}
          alt='search Icon'
        // onClick={handleS}
        /> */}
        </button>
      </form>
    </>

  );
};

// export default Search;

const mapDispatchToProps = {
  Search01,
};

export default connect(null, mapDispatchToProps)(Search);

