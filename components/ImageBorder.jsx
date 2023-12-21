import React from 'react';
import Image from 'next/image';
const ImageWithBorder = () => {
  return (
    <div>
    <div className="header" >
        <div>
          <Image
    src='/wave.png'
      width={7500}
      height={50}
    />
    </div>
    </div>
  
    </div>
  );
};

export default ImageWithBorder;
