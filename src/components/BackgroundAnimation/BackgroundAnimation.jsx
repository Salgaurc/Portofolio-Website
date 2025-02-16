/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './BackgroundAnimation.module.css'


const BackgroundAnimation = () => {
  return (
    <ul className={styles.background}>
        {Array.from({ length: 31 }).map((_, index) => (
            <li key={index}></li>
        ))}
    </ul>
  );
};

export default BackgroundAnimation
