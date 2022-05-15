const { INCREMENTO, DECREMENTO } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento = () => {
  return{
    type: 'INCREMENTO'
// podria estar o no estar el payload
  }
}

const decremento = () => {
  return{
    type: 'DECREMENTO',
    payload: 1
// podria estar o no estar el payload
  }
}


module.exports = {
  incremento,
  decremento
}