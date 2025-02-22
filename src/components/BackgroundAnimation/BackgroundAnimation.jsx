/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import gsap from 'gsap';
import styles from './BackgroundAnimation.module.css';

const BackgroundAnimation = () => {
  const backgroundRef = useRef(null);

  // Define image paths (note: paths are relative to the 'public' folder in React)
  const imagePaths = useMemo(() => [
    "/public/Tech Logos/css.png",
    "/public/Tech Logos/expressJS.png",
    "/public/Tech Logos/firebase.png",
    "/public/Tech Logos/git.png",
    "/public/Tech Logos/html2.png",
    "/public/Tech Logos/javascript.png",
    "/public/Tech Logos/mongodb-logo.png",
    "/public/Tech Logos/nodejs.png",
    "/public/Tech Logos/postman.webp",
    "/public/Tech Logos/react-router.png",
    "/public/Tech Logos/react.png",
    "/public/Tech Logos/tailwind.png"
  ], []);

  // Wrap the createBubble function in useCallback to prevent it from being recreated on every render
  const createBubble = useCallback(() => {
    const bubble = document.createElement("li");
    backgroundRef.current.appendChild(bubble);

    // Randomly select an image from the array
    const randomImage = imagePaths[Math.floor(Math.random() * imagePaths.length)];

    // Create an image element inside the bubble
    const image = document.createElement("img");
    image.src = randomImage;
    image.alt = "Bubble image";
    image.style.width = "100%";
    image.style.height = "100%";
    image.style.objectFit = "cover";

    bubble.appendChild(image);

    // Randomize size and position of the bubble
    const size = `${gsap.utils.random(2, 6)}rem`; // Random size between 10rem and 20rem
    const left = `${gsap.utils.random(0, 100)}%`; // Random left position within the viewport

    // Set initial styles for each bubble
    gsap.set(bubble, {
      position: "absolute",
      left: left,
      bottom: `-${size}`, // Start each bubble below the viewport
      width: size,
      height: size,
      opacity: 0, // Start with opacity 0 to fade in
      overflow: "hidden"
    });

    // Bubble animation with GSAP
    gsap.to(bubble, {
      opacity: 1, // Fade in effect
      scale: 1.5, // Slightly grow bubble
      y: "-100vh", // Move the bubble upwards, off-screen
      rotation: gsap.utils.random(0, 360), // Random rotation
      repeat: 0, // No need to repeat here
      duration: 8 + gsap.utils.random(4, 8), // Randomize animation duration between 8s and 12s
      delay: gsap.utils.random(0, 5), // Random delay for each bubble
      ease: "power1.out", // Ease out to slow down the bubble as it reaches the top
      onComplete: () => {
        // Remove the bubble after it completes the animation
        bubble.remove();
        // Delay next bubble creation to prevent clutter
        setTimeout(createBubble, 1500); // Increase this delay to create bubbles more slowly
      },
    });
  }, [imagePaths]); // Empty dependency array so it won't change on each render

  useEffect(() => {
    if (!backgroundRef.current) return;
    // Create the initial set of bubbles with a slight delay between them
    const initialBubbles = Array.from({ length: 5 }); // Create fewer bubbles initially
    initialBubbles.forEach((_, index) => {
      setTimeout(createBubble, index * 1000); // Delay each bubble's creation for smooth appearance
    });
  }, [createBubble]);

  return <ul ref={backgroundRef} className={styles.background}></ul>;
};

export default BackgroundAnimation;