/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from './Nav.module.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('section1');

  // Handle scroll to a section with smooth scrolling
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Update active section when scrolling
  const handleScroll = () => {
    const sections = ['section1', 'section2', 'section3', 'section4'];
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if the section is in view (with some offset)
        if (rect.top <= 0 && rect.bottom >= 0) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navMenu}>
          <li 
            className={`${styles.navItem} ${activeSection === 'section1' ? styles.active : ''}`}
            onClick={() => handleScrollToSection('section1')}
          >
            Info
          </li>
          <li 
            className={`${styles.navItem} ${activeSection === 'section2' ? styles.active : ''}`}
            onClick={() => handleScrollToSection('section2')}
          >
            Projects
          </li>
          <li 
            className={`${styles.navItem} ${activeSection === 'section3' ? styles.active : ''}`}
            onClick={() => handleScrollToSection('section3')}
          >
            Skills
          </li>
          <li 
            className={`${styles.navItem} ${activeSection === 'section4' ? styles.active : ''}`}
            onClick={() => handleScrollToSection('section4')}
          >
            Contacts
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;