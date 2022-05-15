const { INCREMENTO, DECREMENTO } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  switch(action.type){
    case INCREMENTO:
      return{
        ...state,
        contador: state.contador + 1
/*         array: [...state.array, {}]  *///esto me haría guardar todos los datos en un array, aunque ahorita no lo piden
      }
      case 'DECREMENTO':
        return{
          ...state,
          contador: state.contador + action.payload
        }
    
      default:
        return state
  }
}

module.exports = contador;