import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import MovieCard from "../MovieCard/MovieCard"
import { getMoviesByPage } from "../../service";
import { useEffect } from "react";
import Box from '@material-ui/core/Box';
import "./Home.module.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Favorite from "../Favorite/Favorite";
import Login from "../Authentication/Login/Login"

export default function Home() {
  const [movies, setMovies] = useState([])
useEffect(()=>{
  getMoviesByPage(1).then(({results})=>{
    setMovies(results)
  })
},[])
console.log(movies);
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
      <Box display="flex" flexWrap="wrap">
      {
        movies.map(movie=>{
         return <MovieCard
         key={movie.id}
           title={movie.title}
           path={movie.backdrop_path}
           release_date={movie.release_date}
           overview={movie.overview}
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
      </Switch>
    </div>
    </Router>
  );
}
