import React from 'react'

import Rate from "./Rate";

function MovieCard({movie}) {
    return (
        <div>
              <div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={movie.image} alt="img"/>
      <h1>{movie.title}</h1>
      <h4>{movie.year}</h4>
      <span className="minutes">117 min</span>
      <p className="type">{movie.genre}</p>
    </div>
    <div className="movie_desc">
      <p className="text">
        {movie.synopsis}
      </p>
    </div>
    <div className="movie_social">
    <Rate rating={movie.rating}/> 
    </div>
  </div>
  <div className="blur_back " id={movie.classMovie}></div>

</div>
        </div>
    )
}

export default MovieCard
  