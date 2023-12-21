import React from 'react';
import Image from 'next/image';
const ImageWithBorder = () => {
  return (
    <div>
    <div className="header" >
        <div className="waves">
            <Image
        src='/wave.png'
        width={7500}
        height={100}
      />
      </div>
    </div>
    </div>
    
  );
};

export default ImageWithBorder;
