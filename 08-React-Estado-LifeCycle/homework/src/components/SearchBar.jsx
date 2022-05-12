import React, { useState } from "react";
import styleSearch from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

  //creo un nuevo estado para que tome el valor input del usuario

  const[city, setCity] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault(); //evita que refresque la pagina (evita el componente por defecto que formatea el formulario)
      onSearch(city); //ejecuto la función con esa ciudad
      setCity(''); //limpio nuevamente para la proxima ciudad
    }}>
      <input className={styleSearch.inputS}
        type="text"
        placeholder="Ciudad..."
        onChange={e => setCity(e.target.value)} // retorna el valor actual de los datos en la pisicion del cursos
        value= {city} //para que se vincule al valor de city, sino se me rompe con cualquier valor loco
      />
      <input className={styleSearch.botonSearch} type="submit" value="Agregar" />
    </form>
  );
}
