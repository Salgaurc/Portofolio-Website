/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './SkillsSection.module.css';
import html_logo from '/public/Tech Logos/html2.png';
import css_logo from '/public/Tech Logos/css.png';
import tailwind_logo from '/public/Tech Logos/tailwind.png';
import js_logo from '/public/Tech Logos/javascript.png';
import react_logo from '/public/Tech Logos/react.png';
import react_router_logo from '/public/Tech Logos/react-router.png';

import nodeJS_logo from '/public/Tech Logos/nodejs.png';
import expressJS_logo from '/public/Tech Logos/expressJS.png';
import mongoDB_logo from '/public/Tech Logos/mongodb-logo.png';
import firebase_logo from '/public/Tech Logos/firebase.png';
import git_logo from '/public/Tech Logos/git.png';
import postman_logo from '/public/Tech Logos/postman.webp';

import { RevealLeft, RevealRight } from '../../Utils/Reveal';

const frontendLogos = [
    { pic: html_logo, name: "Html" },
    { pic: css_logo, name: "Css" },
    { pic: tailwind_logo, name: "Tailwind" },
    { pic: js_logo, name: "JavaScript" },
    { pic: react_logo, name: "React" },
    { pic: react_router_logo, name: "React Router" },
]

const backendLogos = [
    { pic: nodeJS_logo, name: "Node Js" },
    { pic: expressJS_logo, name: "Express Js" },
    { pic: mongoDB_logo, name: "Mongo Db" },
    { pic: firebase_logo, name: "Firebase" },
    { pic: git_logo, name: "Git" },
    { pic: postman_logo, name: "Postman" },
]

function SkillsSection() {

    return(
        <div className={styles.skillsContainer}>
            <h1>Skills</h1>
            <RevealRight>
                <div className={styles.frontendSkills}>
                    <h1>Frontend Skills</h1>
                    <div>
                        {frontendLogos.map((skill, i) => (
                            <div key={i} className={styles.skill}>
                                <img src={skill.pic} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealRight>
            <RevealLeft>
                <div className={styles.backendskills}>
                    <h1>Backend Skills</h1>
                    <div>
                        {backendLogos.map((skill, i) => (
                            <div key={i} className={styles.skill}>
                                <img src={skill.pic} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealLeft>
        </div>
    )
}

export default SkillsSection;