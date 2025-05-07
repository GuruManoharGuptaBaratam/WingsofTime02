import React from 'react'
import backgroundVideo from '../Sources/background.mp4';

export default function Background() {
    const videoStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      };
  return (
    <div>
        <video autoPlay muted loop playsInline style={videoStyle}>
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
        </video>
    </div>
  )
}
