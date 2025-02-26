/* eslint-disable no-unused-vars */
import React from "react";
import Tilt from "react-parallax-tilt";
import resume from "../../assets/cv-claudiu-salgau.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";

function HeroSection() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Tilt tiltMaxAngleY={window.innerWidth < 768 ? 3 : 5} tiltMaxAngleX={window.innerHeight < 768 ? 3 : 5}>
        <div className="w-[90rem] h-[25rem] flex items-start justify-evenly bg-black/50 backdrop-blur-md p-16 rounded-xl shadow-lg">
          {/* Profile Image */}
          <div className="h-72 w-72 rounded-full overflow-hidden flex justify-center items-center transition duration-1000 bg-white hover:scale-105">
            <img
              src="/src/assets/IMG_2002.JPG"
              alt="my photo"
              className="h-full w-full max-w-72 max-h-72 p-1 rounded-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-4 p-2">
            <h3 className="text-2xl text-light-brand text-shadow-lg self-end">
              Hello, I&apos;m Claudiu. I&apos;m a Junior Full-Stack Developer
            </h3>
            <h2 className="text-3xl text-light-brand text-shadow-lg font-light tracking-wide">
              Detail oriented | Passionate | Adaptable
            </h2>

            {/* Social Links */}
            <div className="h-40 flex self-end gap-16 text-gray-500 items-end justify-end text-5xl">
              <span className="transition duration-500 cursor-pointer hover:scale-150 hover:text-black">
                <a href="https://github.com/Salgaurc" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </span>
              <span className="transition duration-500 cursor-pointer hover:scale-150 hover:text-[#0e76a8]">
                <a href="https://www.linkedin.com/in/claudiu-robert-salgau-7454a8321" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </span>
              <span className="transition duration-500 cursor-pointer hover:scale-150 hover:text-[#e06969]">
                <a href={resume} download="cv-claudiu-salgau">
                  <TbFileCv />
                </a>
              </span>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default HeroSection;