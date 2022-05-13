import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities){
    return (
    <div className='cards'>
      {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
        /> )}
    </div>
  );
} else {
  return(
    <div className='error'> 
        <h1>No hay ciudades para mostrar</h1>
        <img src="https://images.emojiterra.com/google/android-11/512px/1f625.png" alt="" />
    </div>
  )
}
}

