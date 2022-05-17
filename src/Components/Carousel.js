import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarouselComponent(props) {
  const url = `https://ghibliapi.herokuapp.com/films`;

  const [filmInfo, setFilmInfo] = useState([]);

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
//   console.log(filmInfo);
  function loaded() {
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
            {filmInfo.map((image, index) =>{
                return (<div key={index}>
                    <img src={image.movie_banner} alt={image.title}/>
                    <h3>{image.title}</h3>
                </div>)
            })}
          {/* <div>
            <img src={filmInfo?.movie_banner} />
          </div>
          <div>
            <img src="https://image.tmdb.org/t/p/original/hjlvbMKhQm7N8tYynr8yQ8GBmqe.jpg" />
          </div>
          <div>
            <img src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg" />
          </div> */}
        </Carousel>
      </div>
    );
  }

  function loading() {
    return <h3>Loading data...</h3>;
  }

  return <>{filmInfo ? loaded() : loading()}</>;
}

export default CarouselComponent;
