
import{ useState, useEffect} from "react";
import { Link } from "react-router-dom";
function FilmIndex(props) {
    const [film, setFilm] = useState([]);
    const url = "https://ghibliapi.herokuapp.com/films";
   
    useEffect(() => {
        const getFilm = async () => {
            try {
              const response = await fetch(url);
              const data = await response.json();
              setFilm(data);
            } catch (err) {
              console.log("Ran into a problem ERROR");
            }
          };
    getFilm()}, []);
    return (
      <div>
        {film.map((films, idx) => {
          const id = films.url.split("/films/").slice(1);
          return (
            <div key={idx}>
              <Link to={`/filmshow/${id}`} >
                <h2>{films.title}</h2>
                <img src={films.image} alt={films.title}/>
              </Link>
            </div>
          );
        })}
      </div>
    );
}

export default FilmIndex;