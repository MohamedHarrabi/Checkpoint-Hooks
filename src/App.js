import React,{useState} from 'react'
import './App.css';
import { moviesData } from './Components/MovieData';
import MoviesList from './Components/MoviesList';
import SearchMovie from './Components/SearchMovie';
import AddMovie from './Components/AddMovie';


function App() {

  const [moviesList, setMoviesList] = useState(moviesData)
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);


  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
  <div className="App">

        <SearchMovie className="s"
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
    
    </div>
  );
}

export default App;
