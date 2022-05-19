const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  function rootReducer(state = initialState, action) {
    
    switch (action.type) {
      case 'GET_MOVIES':
        return {
          ...state, 
          moviesLoaded: action.payload.Search
        }
  
      case 'GET_MOVIES_DETAIL':
        return {
          ...state, 
          moviesDetail: action.payload
        }

      case 'ADD_MOVIE_FAVORITE':
        return {
          ...state,
          moviesFavorites: state.moviesFavorites.concat(action.payload),
        }
     
      case 'REMOVE_MOVIE_FAVORITE':
        return {
          ...state,
          moviesFavorites: state.moviesFavorites.filter(movie => movie.id !== action.id)
        }

      default:
        return {...state}
    }
    
    
  /*   la forma comun sería: 

    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state, 
          moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        }; 
    }*/
   
  
   
  }
  
  export default rootReducer;