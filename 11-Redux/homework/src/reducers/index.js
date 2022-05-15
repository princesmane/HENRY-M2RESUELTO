import { INCREMENT, DECREMENT, INCREMENT_IMPAR } from '../actions';

const initialState = {
  count: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // completa para este caso
    return{
      ...state,
      count: state.count + action.payload
    }
    case DECREMENT:
    // Fill para este otro
    return{
      ...state,
      count: state.count - action.payload
    }

    case INCREMENT_IMPAR:
      if(state.count %2 === 1){
        return{
          ...state,
          count: state.count + action.payload
      }
      }

    default:
      return state;
  }
};