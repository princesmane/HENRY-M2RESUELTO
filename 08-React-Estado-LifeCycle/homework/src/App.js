import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';

export default function App() {
  
  const [cities, setCities] = useState([]); //lo inicio con un arreglo vacio

  function onSearch(ciudad) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
    .then(r => r.json())
    .then((recurso) => { 

/* Quiero hacer que si la ciudad está repetida
    muestre muestre la alerta y no se sume, pero se muetsra el mensaje
    desde la segunda ciudad aunque no sea la que se está mostrando
    y se suma igualmente =(  */ 
/* for (let i = 0; i < cities.length; i++) {
          for (let j = 0; j < cities.length; j++) {
            if (recurso.name[i] === recurso.name[j]){
              alert('La ciudad ya se está mostrando');
            }
          }
      }
         */
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };

      setCities(oldCities => [...oldCities, ciudad]); // (...) tomo el primer arreglo, lo copio y le agrego la nueva ciudad;
      } else {
      alert('La ciudad no ha sido encontrada');
      }
    })
}

//De las ciudades que tenia, quiero un nuevo arreglo
//filtrando las nuevas ciudades que me pasaron.

function onClose(id) {
  setCities(oldCities => oldCities.filter(c => c.id != id)); //Comparo con los id que tengo y si existe, lo dejo personalbar, sino lo Filtro
}


  return (
    <div className="App">
        <Nav onSearch={onSearch} />
        <Cards cities={cities} onClose={onClose} />
        <div class="spinner"></div>
    </div>
  );
}
