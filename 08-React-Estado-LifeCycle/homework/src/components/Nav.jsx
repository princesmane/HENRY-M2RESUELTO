import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='navbar'>
      <img src={Logo} alt="" />
      <a class="henry" href="https://www.soyhenry.com/">Henry</a>      
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
