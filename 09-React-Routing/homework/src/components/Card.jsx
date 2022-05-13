import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="cualquiercosa">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="botoncito">X</button>
        </div>
        <div className="card-body">
          <div className='cityDate'>
            <Link to={`/ciudad/${id}`} >
              <h5 className="card-title">{name}</h5>
            </Link>
          </div>
          <div className="temperaturas">
            <div className="minimo">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="maximo">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="imagen">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
