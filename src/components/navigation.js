import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    title: 'Language Guides',
    path: '/languageGuides'
  },
  {
    title:'Look',
    path:'/look'
  },
  {
    title:'Test',
    path:'/test'
  }

];

export default function Navigation() {
  //responsive nav menu
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="site-navigation">
      <span className="menu-title">Langauge Keepers</span>
      <div className={`menu-content-container ${menuActive && 'active'}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))
          }
        </ul>
      </div>
      <i className="fas fa-bars" onClick={() => setMenuActive(!menuActive)} />
    </nav>
  );
} 