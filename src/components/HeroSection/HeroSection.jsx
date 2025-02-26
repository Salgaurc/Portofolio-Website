/* eslint-disable no-unused-vars */
import styles from './HeroSection.module.css';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import resume from '../../assets/cv-claudiu-salgau.pdf'
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { TbFileCv } from 'react-icons/tb';

function HeroSection() {
    return (
        <div className={`${styles.heroContainer}  flex-col items-center justify-between`}>
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
            <Tilt tiltMaxAngleY={window.innerWidth < 768 ? 3 : 5} tiltMaxAngleX={window.innerHeight < 768 ? 3 : 5}>
                <div className={styles.laptopDiv}>
                    <div className={styles.threeDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.laptopScreen}>
                        <div>
                            <p>&gt; Claudiu.currentLocation</p>
                            <span>&#34;Cluj-Napoca, RO&#34;</span>
                        </div>
                        <div>
                            <p>&gt; Claudiu.contactInfo</p>
                            <span>[ &#34;salgaurobert@gmail.com&#34; ]</span>
                        </div>
                        <div>
                            <p>&gt; Claudiu.interests</p>
                            <span>[ &#34;coding&#34; , &#34;playing video games&#34; , &#34;technology&#34; ]</span>
                        </div>
                        <div>
                            <p>&gt; Claudiu.frontendSkills</p>
                            <span>[ &#34;HTML&#34; , &#34;CSS&#34; , &#34;Tailwind&#34; , &#34;JavaScript&#34; , &#34;React&#34; ]</span>
                        </div>
                        <div>
                            <p>&gt; Claudiu.backendSkills</p>
                            <span>[ &#34;Node.js&#34; , &#34;Express&#34; , &#34;MongoDB&#34; , &#34;Git&#34; , &#34;Firebase&#34; ]</span>
                        </div>

                        <div className={styles.flicker}>
                            <span>|</span>
                        </div>
                    </div>
                </div>
            </Tilt>
        </div>
    )
}

export default HeroSection;