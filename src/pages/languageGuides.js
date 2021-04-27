import React from 'react';
import { Link } from 'react-router-dom';

const langGuideLinks = [
  {
    title: 'Language Guide 1',
    path: '/languageGuides/lg1'
  }
];

export default function LanguageGuides() {
  return (
    <ul className="lang-guides">
      {langGuideLinks.map((link, index) => (
        <li key={index}>
          <Link to={link.path}>{link.title}</Link>
        </li>
      ))
      }
    </ul>
  );
}