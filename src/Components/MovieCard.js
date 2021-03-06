import React from 'react'

import Rate from "./Rate";

function MovieCard({movie : {name ,rating , year, genre, image,classMovie,synopsis}}) {
    return (
        <div>
              <div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={image} alt="img"/>
      <h1>{name}</h1>
      <h4>{year}</h4>
      <span className="minutes">117 min</span>
      <p className="type">{genre}</p>
    </div>
    <div className="movie_desc">
      <p className="text">
        {synopsis}
      </p>
    </div>
    <div className="movie_social">
    <Rate rating={rating}/> 
    </div>
  </div>
  <div className="blur_back " id={classMovie}></div>

</div>
        </div>
    )
}

export default MovieCard
  