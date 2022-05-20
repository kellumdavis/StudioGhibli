import { Link } from "react-router-dom";
import useGetFilms from "../hooks/useGetFilms";
function FilmIndex(props) {
  const { loading, films } = useGetFilms();

  if (loading) {
    return <h1>...Loading</h1>;
  }

  return (
    <div className="indexMovieContainer">
      {films.map((film, idx) => {
        const id = film.id;
        return (
          <div className="indexMovie" key={idx}>
            <Link className="indexLink" to={`/filmshow/${id}`}>
              <h2 className="indexTitle">{film.title}</h2>
              <img className="indexImage" src={film.image} alt={film.title} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default FilmIndex;
