import React from 'react';

function ExampleCarouselImage({ src, text }) {
  return (
    <img
      className="d-block w-100 classImg"
      src={src}
      alt={text}
      style={{ objectFit:'contain',   maxHeight: '450px',borderRadius:'10px',aspectRatio:'1:4' }} // Adjust the maxHeight as needed
    />
  );
}

export default ExampleCarouselImage;
