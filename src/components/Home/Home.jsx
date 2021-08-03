import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import MovieCard from "../MovieCard/MovieCard"
import { getMoviesByPage } from "../../service";
import { useEffect } from "react";

export default function Home() {
  const [movies, setMovies] = useState([])
useEffect(()=>{
  getMoviesByPage(1).then(({results})=>{
    setMovies(results)
  })
},[])
console.log(movies);
  return (
    <div>
      <Navbar />
      {
        movies.map(movie=>{
         return <MovieCard
         key={movie.id}
           title={movie.title}
           path={movie.backdrop_path}
           />

        })
      }
    </div>
  );
}
