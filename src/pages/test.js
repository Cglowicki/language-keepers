import React from 'react';
import pic from '../assets/pdf_pics/test-slide.jpeg';
import aud from '../assets/pdf_pics/test-aud.mp3';

const testPDF = () => {
  return (
    <div className="aud-vis">
      <audio controls>
        <source src={aud} type="audio/mpeg"></source>
      </audio>
      <img src={pic} alt="test"></img>
      <div>this is testing aud vis</div>
    </div>
  );
}

export default testPDF;