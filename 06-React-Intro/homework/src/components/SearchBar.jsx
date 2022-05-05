import React from 'react';
import styleSearch from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div>
      <input type='text' placeholder='Ciudad...'/>
      <button className={styleSearch.botonSearch} onClick={() => props.onSearch('Esta es una ciudad')}> Agregar </button> 
  </div>
  )
};