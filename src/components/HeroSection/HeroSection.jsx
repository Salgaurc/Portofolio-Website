/* eslint-disable no-unused-vars */
import styles from './HeroSection.module.css'
import React from 'react'

function HeroSection() {
    return (
        <div className={`${styles.heroSection}  bg-blue-500 h-10 flex items-center justify-center`}>
            <h1 className="text-center">hello</h1>
        </div>
    )
}

export default HeroSection;