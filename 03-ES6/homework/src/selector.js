var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  return selector[0] === '#' ? 'id' : selector[0] === '.' ? 'class' : selector.includes('.') ? 'tag.class' : 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
/*     matchFunction = function(elementoDelDom){
      if('#' + elementoDelDom.id === selector){
        return true
      } else return false;
    } */
    matchFunction = (elementoDelDom) => `#${elementoDelDom.id}` === selector
   
  } else if (selectorType === "class") {
/*     matchFunction = function(elementoDelDom){
      let arrayClasesIncluidas = elementoDelDom.classList;
      for (let i = 0; i < arrayClasesIncluidas.length; i++) {
        if('.' + arrayClasesIncluidas[i] === selector) return true        
      }
      return false  */

    matchFunction = (elementoDelDom) => elementoDelDom.classList.contains(selector.substring(1)) //el substring arranca la palabra desde la posición que yo le pase por argumento

    
  } else if (selectorType === "tag.class") {
    /*matchFunction = function(elementoDelDom){ 
       let tagClass = selector.split('.');
      let tagBuscado = tagClass[0];
      let classBuscado = tagClass[1]; 
      let [tagBuscado, classBuscado] = selector.split('.'); // va a devolverme el tagClass en la posicion 0 y 1 para cada valor respectivamente.
      
      let matchFunctionTag = matchFunctionMaker(tagBuscado);
      let respuestaMatchTag = matchFunctionTag(elementoDelDom);
      
      let matchFunctionClass = matchFunctionMaker('.' + classBuscado);
      let respuestaMatchClass = matchFunctionClass(elementoDelDom);

       return respuestaMatchClass && respuestaMatchTag;
    */

    matchFunction = (elementoDelDom) => matchFunctionMaker(selector.split('.')[0])(elementoDelDom) && matchFunctionMaker(`.${selector.split('.')[1]}`)(elementoDelDom)


  } else if (selectorType === "tag") {
    matchFunction = (elementoDelDom) => elementoDelDom.tagName.toLowerCase() === selector.toLowerCase() //lo paso a minuscula porque la consola me lo devuelve en mayuscula siempre
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
