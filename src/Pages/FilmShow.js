import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Person from "../Components/Person";
import useGetFilmShow from "../hooks/useGetFilmShow";
function FilmShow(props) {
  const params = useParams();
  const filmId = params.id;
  const {filmInfo, loading} = useGetFilmShow(filmId);
  

  if(loading){
    return (
        <h1>...Loading</h1>
    )
}

  return (
    <div>
      <h1>{filmInfo.title}</h1>
      <img src={filmInfo.movie_banner} alt={filmInfo.title} />
      <p>{filmInfo.description}</p>
      <p>Directed By:{filmInfo.director}</p>
      <p>Release Date:{filmInfo.release_date}</p>
      <Person filmId={filmId}/>
    </div>
    
  );
 
}

export default FilmShow;
