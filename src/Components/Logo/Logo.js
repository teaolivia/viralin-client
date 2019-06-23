/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import logo1 from 'images/logo1.png';
import logo2 from 'images/logo2.png';

function Logo() {
  // Import result is the URL of your image
  return (
    <div>
      <img src={logo2} alt="Logo" />
      <img src={logo1} alt="Logo" />
    </div>
  );
}

export default Logo;
