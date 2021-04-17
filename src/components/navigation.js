import React from 'react';
import {Link} from 'react-router-dom';

const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Stories',
    path: '/stories'
  },
  {
    title: 'Listen',
    path: '/listen'
  },
  {
    title: 'Guest Book',
    path: '/guestbook'
  }
];

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <span className="menu-title">Langauge Keepers</span>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))
      }
      <i className="fas fa-bars"></i>
      </ul>
    </nav>
  );
} 