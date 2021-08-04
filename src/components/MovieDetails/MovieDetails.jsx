import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImgUrl, getMovieById } from "../../service";
import Loading from "../Loading/Loading";
import Box from "@material-ui/core/Box";
import "./MovieDetails.css";

export default function MovieDetail() {
  let { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    getMovieById(id).then((res) => {
      setMovieDetail(res);
    });
  }, [id]);

  console.log(movieDetail);
  return movieDetail.length === 0 ? (
    <Box className="backgroundLoading">
      <Loading />
    </Box>
  ) : (
    <div>
      {/* <p>{movieDetail.title}</p> */}
      <img
        className="backgroundDetails"
        src={getImgUrl(movieDetail.backdrop_path)}
        alt="gyago"
        width="100%"
      />
      <div className="container">
        <div className="poster">
        <img
        src={getImgUrl(movieDetail.poster_path)}
        alt="gyago"
      />
        </div>
        <div className="title">
          <b>{movieDetail.title}</b>
          </div>
        <div className="info">
          <b>About The Film</b>
          <p>{movieDetail.vote_average}</p>
          <i>
          {movieDetail.overview}
          </i>
          </div>
      </div>
    </div>
  );
}
