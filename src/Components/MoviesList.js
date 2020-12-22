import React from 'react'
import MovieCard from './MovieCard'

function MoviesList({moviesList , nameSearch, ratingSearch }) {
    return (
        <div>
             {moviesList
        .filter(
          (el) =>
            el.title.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
        .map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}
        </div>
    )
}

export default MoviesList
