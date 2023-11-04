import React, { useState } from 'react';
import moviesData from './Movies';
import MovieCard from './MovieCard';
import Filter from './Filter';
import './App.css'

function MovieList() {
  const [movies, setMovies] = useState(moviesData);
  const [newMovie, setNewMovie] = useState({ title: '', descreption: '', posterURL: '', rating: '' });
  const [filter, setFilter] = useState('');

  const handleInputChange = (event) => {
    setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', descreption: '', posterURL: '', rating: '' });
  };

  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <Filter onFilterChange={setFilter} />
      {filteredMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
      <form className="add-movie-form" onSubmit={handleFormSubmit}>
        <input name="title" value={newMovie.title} onChange={handleInputChange} placeholder="Title" />
        <input name="descreption" value={newMovie.descreption} onChange={handleInputChange} placeholder="Description" />
        <input name="posterURL" value={newMovie.posterURL} onChange={handleInputChange} placeholder="Poster URL" />
        <input name="rating" value={newMovie.rating} onChange={handleInputChange} placeholder="Rating" />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieList;
