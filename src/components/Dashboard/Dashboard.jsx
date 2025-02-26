/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Dashboard.module.css';
import HeroSection from '../HeroSection/HeroSection';
import Navbar from '../Navbar/Nav';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import SkillsSection from '../SkillsSection/SkillsSection';




function Dashboard() {
  return (
    <>
      <div className="min-h-screen ">
        <Navbar />
        <BackgroundAnimation />
        <div className={styles.dashboardContainer}>
          <section
            id="section1"
            className={styles.section1}
          >
            <HeroSection />
          </section>
          <section
            id="section2"
            className={styles.section2}
          >
            {/* Section 2 Content */}
          </section>
          <section
            id="section3"
            className={styles.section3}
          >
            {/* Section 3 Content */}
            <SkillsSection/>
          </section>
          <section
            id="section4"
            className={styles.section2} 
          >
            {/* Section 4 Content */}
          </section>
        </div>
      </div>
    </>
  );
}

export default Dashboard;