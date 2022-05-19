import React, { Children } from "react";

import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";

function App() {
  return (
      <React.Fragment>
          <NavBar /> {/*se rednderiza en todas las rutas porque no la definí */}
          <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} /> {/* Esta es información por prarametro por tener : */}
      </React.Fragment>
  );
}

/* Si quiero pasarle propiedades no puedo hacerlo con component, sino que toca con Children
<Route path='/'> <Buscador/> </Route> */

export default App;
