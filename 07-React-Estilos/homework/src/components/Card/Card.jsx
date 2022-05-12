import React from 'react';
import styleCard from './Card.module.css'
export default function Card(props) {
  // acá va tu código
  
 let grados = '°'

    return (
      <div className='container'>
          <button className='boton' onClick={props.onClose}> X </button>
          <div className='titulo'>
            <h4> {props.name} </h4>
          </div>
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
  )
};