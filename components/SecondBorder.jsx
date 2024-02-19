import React from 'react';

// Adding props parameter to the function component
export default function SecondBorder(props) {
  // Using inline styles to dynamically set the background image
  const containerStyle = {
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: 'cover', // Ensure the image covers the div
    height: '800px', // Adjust the height as necessary
    padding: '0px', // Adjust padding as necessary
  };

  return (
    <div className="headerscontainer" style={containerStyle}>
      <div className="headers"></div>
    </div>
  );
}
