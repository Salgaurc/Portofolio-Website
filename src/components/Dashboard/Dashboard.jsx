/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Dashboard.module.css';
import HeroSection from '../HeroSection/HeroSection';
import Navbar from '../Navbar/Nav';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';

function Dashboard() {
  return (
    <>
    <div className='relative min-h-screen'>
      <Navbar />
      <BackgroundAnimation />
      <div className='relative z-10 pt-[4rem]'>
        <section id='section1' className="h-screen flex items-center justify-center text-white">
          <HeroSection />
        </section>
        <section id='section2' className={`${styles.section2} flex items-center justify-center h-screen`}
          >

        </section>
        <section id='section3' className={`${styles.section3} flex items-center justify-center h-screen`}
          >

        </section>
        <section id='section4' className={`${styles.section2} flex items-center justify-center h-screen`}
          >

        </section>
      </div>
      </div>
    </>
  );
};

export default Dashboard;
