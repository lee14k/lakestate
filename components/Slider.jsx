import React from 'react';

const images = [
  'cleaner.jpg',
  'woodshop.jpg',
  'helping.jpg',
  // Add more image paths as needed
];

function Slider() {
  return (
    <div className="slider">
      <div className="slider-track">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} />
        ))}
        {images.map((image, index) => (
          <img key={index + images.length} src={image} alt={`Slide ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
