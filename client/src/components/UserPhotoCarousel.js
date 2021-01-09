import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import UserPhoto1 from './unsplash-1.jpg';
import UserPhoto2 from './unsplash-2.jpg';
import UserPhoto3 from './unsplash-3.jpg';
import './UserPhotoCarousel.css';

function UserPhotoCarousel({photos}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} slide={false} interval={null}>
      {photos.map((photo, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={photo}
            style={{objectFit: "cover", height: "400px"}}
            alt="User display"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UserPhotoCarousel;
