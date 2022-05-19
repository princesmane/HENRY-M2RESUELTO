import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){ //lo hago para que tenga el comprtamiento de buscar el detalle de la pelicula
        const movieID =this.props.match.params.id;  //tomo la informacion de nuestro id
        this.props.getMovieDetail(movieID); // se destapacha la accion y el estado de moviDetail
    }

    render() {
        return (
            <div className="movie-detail">
                
                <h1>{this.props.movie.Title}</h1>  
                <h2>{this.props.movie.Year}</h2>  
                <h2>{this.props.movie.Rated}</h2>  
                <h2>{this.props.movie.Released}</h2>  
                <h2>{this.props.movie.Genre}</h2>  
                <h2>{this.props.movie.Released}</h2>  
                <h2>{this.props.movie.Title}</h2>  

            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        movie: state.getMovieDetail
    } 
}

function mapDispatchToProps(state){
    return{
        getMovieDetail: movieID => dispatchEvent(getMovieDetail(movieID))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Movie);