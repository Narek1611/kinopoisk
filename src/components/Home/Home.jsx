import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import MovieCard from "../MovieCard/MovieCard"
import { getGenres, getMoviesByPage } from "../../service";
import { useEffect } from "react";
import Box from '@material-ui/core/Box';
import "./Home.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Favorite from "../Favorite/Favorite";
import Login from "../Authentication/Login/Login"
import MovieDetail from "../MovieDetails/MovieDetails";
import findGenreName from "../../helpers/findGenreName";

export default function Home() {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
useEffect(()=>{
  getMoviesByPage(1).then(({results})=>{
    setMovies(results)
  })
},[])
console.log(movies);

useEffect(()=>{
  getGenres().then(({genres})=>{
    setGenres(genres)
  })
},[])


  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
      <Box display="flex" flexWrap="wrap" className="backgroundHome">
      {
        movies.map(movie=>{
         return <MovieCard
         key={movie.id}
           title={movie.title}
           path={movie.backdrop_path}
           release_date={movie.release_date}
           overview={movie.overview}
           id={movie.id}
           genre={findGenreName(genres, movie.genre_ids)}
           />

        })
      }
      </Box>
      </Route>
      <Route path="/favorite">
        <Favorite />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/:id" children={<MovieDetail />}></Route>
      </Switch>
    </div>
    </Router>
  );
}
