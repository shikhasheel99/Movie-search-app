import React, { useState } from "react";
import './MovieCard.css';

const MovieCard = ({ movie, handleSelect, selectedMovie }) => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };
  const handleMouseEnter = () => {
    if (selectedMovie.includes(movie.Title)) {
      setFlip(false);
    }
  };

  const handleMouseLeave = () => {
    if (selectedMovie.includes(movie.Title)) {
      setFlip(true);
    }
  };
  
  return (
    <>
      <div
        className={`movie-card ${selectedMovie.includes(movie.Title) ? 'seen' : 'unseen'} ${flip ? 'flipped' : ''}`}
        onClick={() => handleSelect(movie.Title)}
        onDoubleClick={handleFlip}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        key={movie.Title}
      >
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <b>{movie.Title}</b>
              <img src={movie.Poster} alt={`${movie.Title} Poster`} style={{ maxWidth: '200px' }} />
              {movie.imdbRating}
              <p>{movie.Genre}</p>
              <p>{movie.Year}</p>
              <p>{movie.imdbRating}</p>
            </div>
            <div className="card-back">
              <p>{movie.Writer}</p>
              <p>{movie.Plot}</p>
              <p>{movie.imdbRating}</p>
              <p>{movie.Released}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;



