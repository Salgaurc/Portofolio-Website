/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './Nav.module.css'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // state for toggling menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);  // Toggle menu state
  };

  return (
    <nav className={styles.menuContainer}>
  <input type="checkbox" aria-label="Toggle menu" />
  <span></span>
  <span></span>
  <span></span>

  
  <div className={styles.menu}>
    <ul>
    </ul>
    <ul>
      <li>
        <a href="#info">
          Info
        </a>
      </li>
      <li>
        <a href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a href="#skills">
          Skills
        </a>
      </li>
      <li>
        <a href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </div>
</nav>
  );
};

export default Menu;