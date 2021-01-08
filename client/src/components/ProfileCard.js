import React from 'react';
import UserPhotoCarousel from './UserPhotoCarousel';

const ProfileCard = ({name, age, photos}) => {
  return (
    <>
      <UserPhotoCarousel photos={photos} />
      <h1 className="text-center my-3">{name}, {age}</h1>
    </>
  );
};

export default ProfileCard;