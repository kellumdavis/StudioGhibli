import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Person from "../Components/Person";

function FilmShow(props) {
  const params = useParams();
  const filmId = params.id;
  const url = `https://ghibliapi.herokuapp.com/films/${filmId}`;

  const [filmInfo, setFilmInfo] = useState("null");
 

  useEffect(() => {
    const getFilmInfo = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setFilmInfo(data);
      } catch (err) {
        console.log("Ran into a problem ERROR");
      }
    };
    
    getFilmInfo();
  }, []);
  
  return (
    <div>
      <h1>{filmInfo.title}</h1>
      <img src={filmInfo.movie_banner} alt={filmInfo.title} />
      <p>{filmInfo.description}</p>
      <p>Directed By:{filmInfo.director}</p>
      <p>Release Date:{filmInfo.release_date}</p>
      <Person/>
    </div>
    
  );
 
}

export default FilmShow;
