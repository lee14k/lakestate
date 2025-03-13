import React, { useEffect, useState } from 'react';
import styles from '../styles/Slider.module.css';

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
  const [animationDuration, setAnimationDuration] = useState(30); // seconds for one complete cycle

  useEffect(() => {
    // Calculate animation duration based on number of images
    // More images should result in a longer animation
    const newDuration = images.length * 4; // 4 seconds per image
    setAnimationDuration(newDuration);
  }, []);

  return (
    <div className={styles.slider}>
      <div 
        className={styles.sliderTrack} 
        style={{ 
          animationDuration: `${animationDuration}s`,
          // Double the images to create a seamless loop
          width: `calc(250px * ${images.length * 2})`
        }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
        {/* Duplicate images to create a seamless loop */}
        {images.map((image, index) => (
          <div key={index + images.length} className={styles.slide}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
