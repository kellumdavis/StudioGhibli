import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Person from "../Components/Person";
import useGetFilmShow from "../hooks/useGetFilmShow";
import { SiRottentomatoes } from "react-icons/si";
function FilmShow(props) {
  const params = useParams();
  const filmId = params.id;
  const { filmInfo, loading } = useGetFilmShow(filmId);

  if (loading) {
    return <h1>...Loading</h1>;
  }

  return (
    <div className="showPageContainer">
      <div className="showPageWrapper1">
        <div className="showPageTitle">
          <h1>{filmInfo.title}</h1>
          <h3>{filmInfo.original_title}</h3>
        </div>

        <div className="showPageBanner">
          <img src={filmInfo.movie_banner} alt={filmInfo.title} />
        </div>
      </div>
      <div className="showPageWrapper2">
        <div className="showPageCredits">
          <p>Directed By:{filmInfo.director}</p>
          <p>Produced By:{filmInfo.producer}</p>
          <p>Release Date:{filmInfo.release_date}</p>
          <p>
            <SiRottentomatoes className="rotten" />:{filmInfo.rt_score}
          </p>
        </div>
        <div className="showPageDescription">
          <p>{filmInfo.description}</p>
        </div>
      </div>
      {/* <Person filmId={filmId} /> */}
    </div>
  );
}

export default FilmShow;
