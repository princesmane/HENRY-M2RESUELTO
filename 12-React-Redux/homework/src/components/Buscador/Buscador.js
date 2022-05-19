import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies, addMovieFavorite } from "../../actions/index.js";


function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" >BUSCAR</button>
        </form>
        <ul>
           {  
             this.props.movies && this.props.movies.map(movie => (
              <div key={movie.imdbID}>
                <Link to ={`/movie/${movie.imdbID}`}>
                  {movie.Title}
                </Link>
                <button onClick={() => this.props.addMovieFavorite({
                  title: movie.Title,
                  id: movie.imdbID,
                })}>FAV</button>
              </div>
             ))
            }
        </ul>
      </div>
    );
  }
}

//Si lo quiero en función:

/*export default function Buscador ({propq, prop2}){
  const [title, setTitle]= useState('')
  
  let handleChange = (e) => {
    setTitle(e.targe.value);
  }

  let handleSubmit = (e) => {
    e.prevenDefault();
  }

  return (
    <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" /* onClick={() => this.props.obtenerPelis(title)} >BUSCAR</button>
          </form>
          <ul>
          //aqui va tu codigo//
          </ul>
        </div>
  )

}

*/


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);

