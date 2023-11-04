import React from 'react';
import './App.css';
function MovieCard({movie}) {
    
  return (
    <div className="movie-card">
        <h2>{movie.title}</h2>
        <p>{movie.descreption}</p>
        <img src ={movie.posterURL} alt={movie.title} style={{width:'500px'}}/>
        <p>Rating : {movie.rating}</p>
    </div>
  );
}
export default MovieCard;
