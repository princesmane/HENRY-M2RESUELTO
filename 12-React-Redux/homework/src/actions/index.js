

export function addMovieFavorite(movie) {
    return {
        type: "ADD_MOVIE_FAVORITE",
        payload : movie
    };
}

export function removeMovieFavorite (id){
  return{
      type: "REMOVE_MOVIE_FAVORITE",
      payload: id
  }
}

export function getMovies(title) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=1aeacbfb&s=${title}`)
        .then(response => response.json()) //recibo la respuesta y la retorno transformada en objeto json visible para js
        .then(movies => {
          dispatch({ 
              type: "GET_MOVIES", 
              payload: movies //capturo la información y despacho la acción
            }); 
        });
    };
  }

  export function getMovieDetail (id){
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=1aeacbfb&i=${id}`)
        .then(response => response.json()) //recibo la respuesta y la retorno transformada en objeto json visible para js
        .then(detail => {
          dispatch({ 
              type: "GET_MOVIE_DETAIL", 
              payload: detail //capturo la información y despacho la acción
            }); 
        });
    };
  }


