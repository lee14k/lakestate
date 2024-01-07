// BackgroundCutout.js
import React from 'react';


const Parallax = ({ children, imageUrl }) => {
  return (
    <div className="background-cutout">
      <div className="fixed-background" style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* Background Image Here */}
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Parallax;
