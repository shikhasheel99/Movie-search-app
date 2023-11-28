import React, {useState} from 'react';
import  axios from 'axios';
import MovieCard from './MovieCard';

const MovieSearch = () =>{

    const [query, setQuery] = useState("");
    const [movies,setMovies] = useState([]);
    const [selectedMovie,setSelectedMovie] = useState([])
    const handleSearch = async() =>{
       const apiKey = "19954ca4"
       const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${query}`);
       if (response.data) setMovies([...movies,response.data])
       setQuery("");
       console.log(response.data);
    }
    const handleSelect = (movieName) =>{
      if (selectedMovie.includes(movieName)){
       const see = selectedMovie.filter((movie)=> movie !==movieName)
       setSelectedMovie(see)
      } else 
       setSelectedMovie([...selectedMovie,movieName])
    }
       const seenMovies = movies.filter((movie) => selectedMovie.includes(movie.Title));
  const unseenMovies = movies.filter((movie) => !selectedMovie.includes(movie.Title));
 
   
    return(
          <div>
        <h1>Movie Search </h1>
        <input  type = "text" placeholder='Search for a movie' value ={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} disabled = {query.trim().length === 0}>Search</button>
       
        <div>
        {seenMovies.length > 0 && (
          <>
            <h2>Seen Movies</h2>
            {seenMovies.map((movie) => (
              <MovieCard
                key={movie.Title}
                movie={movie}
                handleSelect={handleSelect}
                selectedMovie={selectedMovie}
              />
             
      
            ))}
             { movies.length <= 0 && <h1>Search For A Movie</h1>}
          </>
        )}

        {unseenMovies.length > 0 && (
          <>
            <h2>Unseen Movies</h2>
            {unseenMovies.map((movie) => (
              <MovieCard
                key={movie.Title}
                movie={movie}
                handleSelect={handleSelect}
                selectedMovie={selectedMovie}
              />
            ))}
          </>
        )}

        {movies.length <= 0 && <h1>Search For A Movie</h1>}
      </div>
        </div>

        )
    }


export default MovieSearch;