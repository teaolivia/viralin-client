import React from 'react';
import logo1 from './logo1.png';
import logo2 from './logo2.png'; // Tell Webpack this JS file uses this image

function Logo() {
  // Import result is the URL of your image
  return <div>
      <img src={logo2} alt="Logo" />
      <img src={logo1} alt="Logo" />
      </div>;
}

export default Logo;