/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./BackgroundAnimation.module.css";

const BackgroundAnimation = () => {
  const backgroundRef = useRef(null);

  const imagePaths = [
    "/tech-logos/css.png",
    "/tech-logos/expressJS.png",
    "/tech-logos/firebase.png",
    "/tech-logos/git.png",
    "/tech-logos/html2.png",
    "/tech-logos/javascript.png",
    "/tech-logos/mongodb-logo.png",
    "/tech-logos/nodejs.png",
    "/tech-logos/postman.webp",
    "/tech-logos/react-router.png",
    "/tech-logos/react.png",
    "/tech-logos/tailwind.png",
  ];

  useEffect(() => {
    const container = backgroundRef.current;
    if (!container) return;

    let isActive = true;
    const timeouts = [];

    const createBubble = () => {
      if (!isActive || !container) return;

      const bubble = document.createElement("li");
      container.appendChild(bubble);

      const img = document.createElement("img");
      img.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];
      img.alt = "tech logo";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";

      bubble.appendChild(img);

      const size = `${gsap.utils.random(2, 6)}rem`;
      const left = `${gsap.utils.random(0, 100)}%`;

      gsap.set(bubble, {
        position: "absolute",
        left,
        bottom: `-${size}`,
        width: size,
        height: size,
        opacity: 0,
        overflow: "hidden",
      });

      gsap.to(bubble, {
        opacity: 1,
        scale: 1.5,
        y: "-120vh",
        duration: gsap.utils.random(8, 14),
        ease: "power1.out",
        onComplete: () => {
          bubble.remove();
        },
      });
    };

    // initial burst
    for (let i = 0; i < 5; i++) {
      timeouts.push(
        setTimeout(createBubble, i * 700)
      );
    }

    // stable interval loop
    const interval = setInterval(createBubble, 1500);

    return () => {
      isActive = false;
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
      container.innerHTML = "";
    };
  }, []);

  return <ul ref={backgroundRef} className={styles.background}></ul>;
};

export default BackgroundAnimation;