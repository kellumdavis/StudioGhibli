
import{ useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useGetFilms from "../hooks/useGetFilms";
function FilmIndex(props) {
   const {loading, films} = useGetFilms();

   if(loading){
       return (
           <h1>...Loading</h1>
       )
   }
   
    return (
      <div>
        {films.map((film, idx) => {
          const id = film.id;
          return (
            <div key={idx}>
              <Link to={`/filmshow/${id}`} >
                <h2>{film.title}</h2>
                <img src={film.image} alt={film.title}/>
              </Link>
            </div>
          );
        })}
      </div>
    );
}

export default FilmIndex;