import React from 'react';
import { Document, Page } from 'react-pdf';
import lg1 from './langGuide/LG1.pdf';

export default function LangGuide1() {
  return (
    <Document file={lg1}>
    </Document>
  );
}





// import pic from '../assets/pdf_pics/test-slide.jpeg';
// import aud from '../assets/pdf_pics/test-aud.mp3';

// import '../assets/scss/test.scss';

// export default function p2Prayer() {
//   return (
//     <div className="aud-vis">
//       <audio controls>
//         <source className="test-aud-controls" src={aud} type="audio/mpeg"></source>
//       </audio>
//       <img src={pic} alt="test"></img>
//       <div>this is testing aud vis</div>
//     </div>
//   );
// }

