import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/Mitienda.png';

const Header = () => (
  <header className='header'>
    <div className='Container'>
      <div className='menu'>
        <img className='logo' src={logo} alt='logo' />
        <input type='text' className='search' placeholder='Buscar' />
      </div>
    </div>
  </header>

);

export default Header;

