/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './SkillsSection.module.css';
import html_logo from '/public/tech-logos/html2.png';
import css_logo from '/public/tech-logos/css.png';
import tailwind_logo from '/public/tech-logos/tailwind.png';
import js_logo from '/public/tech-logos/javascript.png';
import react_logo from '/public/tech-logos/react.png';
import react_router_logo from '/public/tech-logos/react-router.png';

import nodeJS_logo from '/public/tech-logos/nodejs.png';
import expressJS_logo from '/public/tech-logos/expressJS.png';
import mongoDB_logo from '/public/tech-logos/mongodb-logo.png';

import firebase_logo from '/public/tech-logos/firebase.png';
import git_logo from '/public/tech-logos/git.png';
import postman_logo from '/public/tech-logos/postman.webp';

import { RevealLeft, RevealRight } from '../../Utils/Reveal';

const frontendLogos = [
    { pic: html_logo, name: "HTML" },
    { pic: css_logo, name: "CSS" },
    { pic: tailwind_logo, name: "Tailwind" },
    { pic: js_logo, name: "JavaScript" },
    { pic: react_logo, name: "React" },
];

const backendLogos = [
    { pic: nodeJS_logo, name: "Node.js" },
    { pic: expressJS_logo, name: "Express.js" },
];

const databaseLogos = [
    { pic: mongoDB_logo, name: "MongoDB" },
];

const cloudLogos = [
    { pic: firebase_logo, name: "Firebase" },
];

const toolsLogos = [
    { pic: git_logo, name: "Git" },
    { pic: postman_logo, name: "Postman" },
];

function SkillsSection() {
    return (
        <div className={styles.skillsContainer}>
            <h1>Skills</h1>

            <RevealRight>
                <div className={styles.section}>
                    <h1>Frontend Skills</h1>
                    <div className={styles.skillsGrid}>
                        {frontendLogos.map((skill, i) => (
                            <div key={i} className={styles.skill}>
                                <img src={skill.pic} alt={skill.name} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealRight>

            <RevealLeft>
                <div className={styles.section}>
                    <h1>Backend Skills</h1>
                    <div className={styles.skillsGrid}>
                        {backendLogos.map((skill, i) => (
                            <div key={i} className={styles.skill}>
                                <img src={skill.pic} alt={skill.name} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealLeft>

            <RevealRight>
                <div className={styles.section}>
                    <h1>Database</h1>
                    <div className={styles.skillsGrid}>
                        {databaseLogos.map((skill, i) => (
                            <div key={i} className={styles.skill}>
                                <img src={skill.pic} alt={skill.name} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealRight>

            <RevealLeft>
                <div className={styles.section}>
                    <h1>Cloud / BaaS</h1>
                    <div className={styles.skillsGrid}>
                        {cloudLogos.map((skill, i) => (
                            <div key={i} className={styles.skill}>
                                <img src={skill.pic} alt={skill.name} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealLeft>

            <RevealRight>
                <div className={styles.section}>
                    <h1>Tools</h1>
                    <div className={styles.skillsGrid}>
                        {toolsLogos.map((tool, i) => (
                            <div key={i} className={styles.skill}>
                                <img src={tool.pic} alt={tool.name} />
                                <p>{tool.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealRight>
        </div>
    );
}

export default SkillsSection;