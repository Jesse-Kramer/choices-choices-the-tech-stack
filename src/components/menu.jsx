import React, { useState } from 'react';

const MenuComponent = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const menuItems = [
    { href: './home', imgSrc: '/icons/home-icon.svg', alt: 'Navigatie naar Home', label: 'Home', bgColor: '#3F92B6' },
    { href: './testing', imgSrc: '/icons/puzzle-icon.svg', alt: 'Navigatie naar Testing', label: 'Testing', bgColor: '#599AE7' },
    { href: './lessons', imgSrc: '/icons/book-icon.svg', alt: 'Navigatie naar Lessons', label: 'Lessons', bgColor: '#954BE2' },
    { href: './statistics', imgSrc: '/icons/chart-icon.svg', alt: 'Navigatie naar Statistics', label: 'Statistics', bgColor: '#06A192' },
    { href: './profile', imgSrc: '/icons/person-icon.svg', alt: 'Navigatie naar Profile', label: 'Profile', bgColor: '#FD8C73' },
  ];

  return (
    <article className="nav">
      <nav className={`menu ${isMenuActive ? 'active' : ''}`} aria-hidden={!isMenuActive}>
        <ul>
          {menuItems.map(({ href, imgSrc, alt, label, bgColor }, index) => (
            <li key={index} className={index === 0 ? 'active' : ''}>
              <a href={href} tabIndex={isMenuActive ? '0' : '-1'}>
                <div style={{ backgroundColor: bgColor }}>
                  <img src={imgSrc} alt={alt} />
                </div>
                <p>{label}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={`btn ${isMenuActive ? 'close' : 'open'}`}
        onClick={toggleMenu}
        aria-label={isMenuActive ? 'Close Menu' : 'Open Menu'}
        aria-expanded={isMenuActive}
      >
        <img
          src={isMenuActive ? '/icons/menu-close.svg' : '/icons/menu-open.svg'}
          alt={isMenuActive ? 'Close menu' : 'Open menu'}
        />
      </button>
    </article>
  );
};

export default MenuComponent;
