/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Dashboard.module.css';
import HeroSection from '../HeroSection/HeroSection';
import Navbar from '../Navbar/Nav';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';

function Dashboard() {
  return (
    <>
      <Navbar />
      <BackgroundAnimation />
      <div className={styles.dashboardContainer}>
        <section id='section1' className={styles.section1}>
          <HeroSection />
        </section>
        <section id='section2' className={styles.section1}>

        </section>
        <section id='section3' className={styles.section1}>

        </section>
        <section id='section4' className={styles.section1}>

        </section>
      </div>
    </>
  );
};

export default Dashboard;
