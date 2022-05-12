import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
      <div>    
        {
          props.cities ? props.cities.map((city) => { //Si props.cities existe -> mapealo
            return (
              <Card 
                  key={city.id}
                  max={city.main.temp_max}
                  min={city.main.temp_min}
                  name={city.name}
                  img={city.weather[0].icon}
                  onClose={props.onClose}
              />
            )
        }) : <div> 
                 <h4> Haven't Cities for display</h4>
             </div>        
        }
      </div>
  )
};