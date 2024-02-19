import React from 'react';

export default function SecondBorder(props) {
  // Container style includes the background image
  const containerStyle = {
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    height: '700px', // Adjust the height as necessary
    padding: '0px',
    position: 'relative', // Ensure we can position children absolutely within
  };

  return (
    <div className="headerscontainer mb-24" style={containerStyle}>
      {/* Positioned Header */}
      <div className="header-content flex justify-center items-center h-full">
        <h1 className="text-white text-8xl lakerhead">Headers</h1>
      </div>
      
      {/* Waves Overlay */}
      <div className="headerstwo" style={{ position: 'absolute', bottom: '-20px', left: '0', right: '0' }}></div>
    </div>
  );
}
