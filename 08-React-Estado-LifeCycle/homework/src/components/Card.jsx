import React from 'react';
import './Card.css'
export default function Card(props) {
  
  let grados = '°'

  return (
    <div className='cualquiercosa'>   
        <button className= 'botoncito' onClick={props.onClose}> X </button>
        <h4> {props.name} </h4>
      <div className= 'temperaturas'>
         <div className='minimo'> 
          <h6> Min </h6>
          <p> {props.min}{grados} </p>
         </div>
         <div className='maximo'>
          <h6> Máx</h6>
          <p> {props.max}{grados} </p>
          </div>
        <div className='imagen'> 
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='logo del clima'/>
        </div> 
      </div>
    </div>
)
};
