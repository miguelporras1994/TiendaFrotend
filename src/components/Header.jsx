import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/Mitienda.png';

const Header = () => (
  <header className='header'>
    <div className='Container'>
      <div className='menu'>
        <Link to='/' rel='Home_mi_tienda'>
          <img className='logo' src={logo} alt='logo_mi_tienda' />
        </Link>
        <div className='Container-search'>
          <Search />
        </div>
      </div>
    </div>
  </header>

);

export default Header;

