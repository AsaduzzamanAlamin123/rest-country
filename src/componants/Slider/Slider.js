import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-50 height mx-auto rounded"
      src="https://c1.wallpaperflare.com/preview/151/224/61/bangladesh-trivel-culture-village-people.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 mx-auto height rounded"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIg0j5-DV-KHVmVbRsx-qjtKzFJu0U8g6nQ&usqp=CAU"
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 height mx-auto rounded"
      src="https://w0.peakpx.com/wallpaper/993/604/HD-wallpaper-the-family-of-philip-v-king-of-spain-red-louis-michel-van-loo-family-king-art-spain-people-painting-pictura.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;