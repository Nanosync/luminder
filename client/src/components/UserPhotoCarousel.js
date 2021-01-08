import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import UserPhoto1 from './unsplash-1.jpg';
import UserPhoto2 from './unsplash-2.jpg';
import UserPhoto3 from './unsplash-3.jpg';
import './UserPhotoCarousel.css';

function UserPhotoCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} slide={false} interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={UserPhoto1}
          style={{objectFit: "cover", height: "400px"}}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={UserPhoto2}
          style={{objectFit: "cover", height: "400px"}}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={UserPhoto3}
          style={{objectFit: "cover", height: "400px"}}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UserPhotoCarousel;
