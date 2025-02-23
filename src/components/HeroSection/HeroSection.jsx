/* eslint-disable no-unused-vars */
import styles from './HeroSection.module.css';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import resume from '../../assets/cv-claudiu-salgau.pdf'
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { TbFileCv } from 'react-icons/tb';

function HeroSection() {
    return (
        <div className={`${styles.heroContainer}  flex items-center justify-center`}>
            <Tilt tiltMaxAngleY={window.innerWidth < 768 ? 3 : 5} tiltMaxAngleX={window.innerHeight < 768 ? 3 : 5}>
                <div className={styles.heroDiv}>
                    <div className={styles.photoDiv}>
                        <img src='/src/assets/IMG_2002.JPG' alt="my photo" className={styles.myImg}/>
                    </div>
                    <div className={styles.description}>
                        <h3>Hello, I&apos;m Claudiu. I&apos;m a Junior Full-Stack Developer</h3>
                        <h2> Detail oriented | Passionate | Adaptable</h2>
                        <div className={styles.platformsDiv}>
                            <span> 
                                <a href="https://github.com/Salgaurc" target='_blank' rel='noopener noreferrer'>
                                <FaGithub/>
                                </a>
                            </span>
                            <span> 
                                <a href="https://www.linkedin.com/in/claudiu-robert-salgau-7454a8321" target='_blank' rel='noopener noreferrer'>
                                <FaLinkedin/>
                                </a>
                            </span>
                            <span> 
                                <a href={resume} download='cv-claudiu-salgau'>
                                    <TbFileCv/>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </Tilt>
        </div>
    )
}

export default HeroSection;