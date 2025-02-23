/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Dashboard.module.css';
import HeroSection from '../HeroSection/HeroSection';
import Navbar from '../Navbar/Nav';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';




function Dashboard() {
  return (
    <>
      <div className="min-h-screen ">
        <Navbar />
        <BackgroundAnimation />
        <div className="relative z-1 overflow-y-auto">
          <section
            id="section1"
            className={`${styles.section1} h-screen w-full flex items-center justify-center text-white`}>
            <HeroSection />
          </section>
          <section
            id="section2"
            className={`${styles.section2} flex items-center justify-center h-screen w-full`}
          >
            {/* Section 2 Content */}
          </section>
          <section
            id="section3"
            className={`${styles.section3} flex items-center justify-center h-screen w-full`}
          >
            {/* Section 3 Content */}
          </section>
          <section
            id="section4"
            className={`${styles.section2} flex items-center justify-center h-screen w-full`}
          >
            {/* Section 4 Content */}
          </section>
        </div>
      </div>
    </>
  );
}

export default Dashboard;