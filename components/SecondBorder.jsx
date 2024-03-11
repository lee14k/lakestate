import React from 'react'

export default function SecondBorder(props) {
  // Container style includes the background image
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    height: '1000px', // Adjust the height as necessary
    padding: '0px',
    position: 'relative', // Ensure we can position children absolutely within
  }

  return (
    <div className="headerscontainer" style={containerStyle}>
      {/* Positioned Header */}
      <div className="header-content flex justify-center items-center h-full">
        <h1 className="text-white text-5xl sm:text-8xl lakerhead ">
          {props.header}
        </h1>
      </div>

      {/* Waves Overlay */}
      <div
        className="headerstwo"
        style={{
          position: 'absolute',
          bottom: '-120px',
          left: '0',
          right: '0',
        }}
      ></div>
    </div>
  )
}
