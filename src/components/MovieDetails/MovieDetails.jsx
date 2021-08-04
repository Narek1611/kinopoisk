import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getImgUrl, getMovieById } from "../../service";
import Loading from '../Loading/Loading';
import Box from '@material-ui/core/Box';
import "./MovieDetails.css"


export default function MovieDetail() {
  let { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    getMovieById(id).then((res) => {
      setMovieDetail(res);
    });
  }, [id]);

  console.log(movieDetail);
  return(
    movieDetail.length === 0 ? (<Box className="backgroundLoading"><Loading /></Box>) :
     <Box className="backgroundDetails">
      {/* <p>{movieDetail.title}</p> */}
      <img src={getImgUrl(movieDetail.backdrop_path)} alt="gyago" width="100%"/>
      </Box>
  );
}