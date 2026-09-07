import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";
import resume from "../../assets/Claudiu-FlowCV-2025.pdf";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-10 px-6 flex flex-col items-center gap-4 border-t border-white/10">
      <div className="flex items-center gap-6 text-2xl text-white">
        
          href="https://github.com/Salgaurc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-colors duration-300 hover:text-[#d9b46f]"
        >
          <FaGithub />
        </a>
        
          href="https://www.linkedin.com/in/claudiu-robert-salgau-7454a8321"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors duration-300 hover:text-[#d9b46f]"
        >
          <FaLinkedin />
        </a>
        
          href="mailto:salgaurobert@gmail.com"
          aria-label="Email"
          className="transition-colors duration-300 hover:text-[#d9b46f]"
        >
          <FaEnvelope />
        </a>
        
          href={resume}
          download="Claudiu-FlowCV-2025"
          aria-label="Descarcă CV"
          className="transition-colors duration-300 hover:text-[#d9b46f]"
        >
          <TbFileCv />
        </a>
      </div>

      <p className="text-sm text-gray-400 text-center">
        © {year} Claudiu Salgău. Toate drepturile rezervate.
      </p>
    </footer>
  );
}

export default Footer;
