import React from 'react';
import { Document } from 'react-pdf';
import goodRoots from '../assets/pdf_pics/good-roots.pdf';



export default function Posters() {
  return (
    <div>look

      <Document file={goodRoots}>
        
        </Document>

</div>
  );
}