import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
function CarouselComponent(props) {
    return(
        <div>
            <Carousel infiniteLoop autoPlay stopOnHover showStatus={false} interval={7000} showThumbs={false}>
                <div>
                    <img src="https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg" />
                </div>
                <div>
                    <img src="https://image.tmdb.org/t/p/original/hjlvbMKhQm7N8tYynr8yQ8GBmqe.jpg" />
                </div>
                <div>
                    <img src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg" />
                </div>
                </Carousel>
        </div>
    )
}

export default CarouselComponent;