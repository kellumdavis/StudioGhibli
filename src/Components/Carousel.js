import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useGetFilms from "../hooks/useGetFilms";
function CarouselComponent(props) {
  const {loading, films} = useGetFilms();

  if(loading){
    return (
        <h1>...Loading</h1>
    )
}

  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        stopOnHover={true}
        showStatus={false}
        interval={6000}
        showThumbs={false}
      >
          {films.map((image, index) =>{
              return (<div key={index}>
                  <img src={image.movie_banner} alt={image.title}/>
                  <h3>{image.title}</h3>
              </div>)
          })}
      
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
