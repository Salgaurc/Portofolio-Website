/* eslint-disable no-unused-vars */
import styles from './HeroSection.module.css';
import React, { useMemo } from 'react';
import Tilt from 'react-parallax-tilt';
import resume from '../../assets/Claudiu-FlowCV-2025.pdf';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { TbFileCv } from 'react-icons/tb';

function HeroSection() {
    const tiltSettings = useMemo(() => {
        if (typeof window === 'undefined') {
            return { maxX: 5, maxY: 5 };
        }

        const isMobile = window.innerWidth < 768;

        return {
            maxX: isMobile ? 3 : 5,
            maxY: isMobile ? 3 : 5
        };
    }, []);

    return (
        <div className={`${styles.heroContainer} flex flex-col items-center justify-between`}>
            
            <Tilt
                tiltMaxAngleX={tiltSettings.maxX}
                tiltMaxAngleY={tiltSettings.maxY}
            >
                <div className={styles.heroDiv}>
                    
                    <div className={styles.photoDiv}>
                        <img 
                            src="/IMG_2002.JPG" 
                            alt="my photo" 
                            className={styles.myImg} 
                        />
                    </div>

                    <div className={styles.description}>
                        <h3>
                            Hello, I&apos;m Claudiu. I&apos;m a Junior Full-Stack Developer
                        </h3>

                        <h2>
                            Detail-oriented | Creative | Adaptive
                        </h2>

                        <div className={styles.platformsDiv}>
                            <span>
                                <a href="https://github.com/Salgaurc" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                            </span>

                            <span>
                                <a href="https://www.linkedin.com/in/claudiu-robert-salgau-7454a8321" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            </span>

                            <span>
                                <a href={resume} download="Claudiu-FlowCV-2025">
                                    <TbFileCv />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </Tilt>

            <Tilt
                tiltMaxAngleX={tiltSettings.maxX}
                tiltMaxAngleY={tiltSettings.maxY}
            >
                <div className={styles.laptopDiv}>
                    <div className={styles.threeDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={styles.laptopScreen}>
                        <div>
                            <p>&gt; Claudiu.currentLocation</p>
                            <span>"Cluj-Napoca, RO"</span>
                        </div>

                        <div>
                            <p>&gt; Claudiu.contactInfo</p>
                            <span>["salgaurobert@gmail.com"]</span>
                        </div>

                        <div>
                            <p>&gt; Claudiu.interests</p>
                            <span>["coding", "playing video games", "technology"]</span>
                        </div>

                        <div>
                            <p>&gt; Claudiu.frontendSkills</p>
                            <span>["HTML", "CSS", "Tailwind", "JavaScript", "React"]</span>
                        </div>

                        <div>
                            <p>&gt; Claudiu.backendSkills</p>
                            <span>["Node.js", "Express", "MongoDB", "Git", "Firebase"]</span>
                        </div>

                        <div className={styles.flicker}>
                            <span>|</span>
                        </div>
                    </div>
                </div>
            </Tilt>

        </div>
    );
}

export default HeroSection;