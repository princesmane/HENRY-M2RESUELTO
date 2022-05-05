import React from 'react';
import styleCard from './Card.module.css'
export default function Card(props) {
  // acá va tu código
  
 let grados = '°'

    return (
      <div className={styleCard.cualquiercosa}>   
          <button className= {styleCard.botoncito} onClick={props.onClose}> X </button>
          <h4> {props.name} </h4>
        <div className= {styleCard.temperaturas}>
           <div className={styleCard.minimo}> 
            <h6> Min </h6>
            <p> {props.min}{grados} </p>
           </div>
           <div className={styleCard.maximo}>
            <h6> Máx</h6>
            <p> {props.max}{grados} </p>
            </div>
          <div className={styleCard.imagen}> 
            <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='logo del clima'/>
          </div> 
        </div>

      </div>
  )
};