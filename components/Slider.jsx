import React from 'react';

const images = [
  'cleaner.jpg',
  'woodshop.jpg',
  'helping.jpg',
  'PMMC6.jpg',
  'ls-new-5.jpg',
  'ls-new-6.jpg',
  'ls-new-7.jpg'

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
