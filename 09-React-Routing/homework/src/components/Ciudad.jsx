import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Ciudad({city}) {

//para que no me de error cuando actualizo desde la ciudad:
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
//destructuro ciudadId porque así le puse en la ruta de ciudad en app
const { ciudadId } = useParams() //useParams retorna un objeto de los parametros de la URL
const [infoCity, setInfoCity] = useState({})

    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${ciudadId}&appid=${apiKey}`)
    .then((respuestaCiudad) => respuestaCiudad.json())
      .then((inf) => {
          const objCity= {
              temp: inf.main.temp,
              weather: inf.weather[0].main,
              wind: inf.wind.speed,
              cloud: inf.cloud.all,
              latitud: inf.coord.lat,
              longitud: inf.coord.lon
          }
          setInfoCity(objCity)

      })



    if (city){

        return (
            <div className="ciudad">
                    <div className="container">
                        <h2>{city.name}</h2>
                        <div className="info">
                            <div>Temperatura: {city.temp} ºC</div>
                            <div>Clima: {city.weather}</div>
                            <div>Viento: {city.wind} km/h</div>
                            <div>Cantidad de nubes: {city.clouds}</div>
                            <div>Latitud: {city.latitud}º</div>
                            <div>Longitud: {city.longitud}º</div>
                        </div>
                </div>
            </div>
        )
        } else if (!infoCity){
            return(
                <div>Cargando...</div>
            )


        } else {
            return(
            <div className="ciudad">
                 <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                            <div>Temperatura: {infoCity.temp} ºC</div>
                            <div>Clima: {infoCity.weather}</div>
                            <div>Viento: {infoCity.wind} km/h</div>
                            <div>Cantidad de nubes: {infoCity.cloud}</div>
                            <div>Latitud: {infoCity.latitud}º</div>
                            <div>Longitud: {infoCity.longitud}º</div>
                    </div>
                </div>
            </div>
            )}
            
            
            
            

}