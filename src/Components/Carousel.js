import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useGetFilms from "../hooks/useGetFilms";
function CarouselComponent(props) {
  const { loading, films } = useGetFilms();

  if (loading) {
    return <h1>...Loading</h1>;
  }

  return (
    <div className="carousel">
      <Carousel
        infiniteLoop
        autoPlay
        stopOnHover={true}
        showStatus={false}
        interval={6000}
        showThumbs={false}
        showIndicators={false}
      >
        {films.map((image, index) => {
          return (
            <div className="carousel-combo" key={index}>
              <img
                className="carousel-pic"
                src={image.movie_banner}
                alt={image.title}
              />
              <div className="text-block">
                <h3>{image.title}</h3>
                <p>Release Date:{image.release_date}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
