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

  useEffect(() => {
    const sections = document.querySelectorAll('section'); // Select all sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set the active section when it's in view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    sections.forEach((section) => observer.observe(section)); // Observe each section

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // Cleanup observer on unmount
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
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;