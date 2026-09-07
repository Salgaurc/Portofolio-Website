import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = [
  {
    id: "project1",
    glideClass: "glide-project1",
    title: "Flatfinder Rental Platform",
    description:
      "A rental platform web application where users can browse, filter, and manage listings.",
    images: [
      "LoginPage.jpeg",
      "MainPage.jpeg",
      "FlatDetails.jpeg",
      "AddFlatModal.jpeg",
      "AdminDashboard.jpeg",
      "FilterOptions.jpeg",
      "SortOptions.jpeg",
      "MessagesModal.jpeg",
      "UpdateProfile.jpeg",
    ],
  },
  {
    id: "project2",
    glideClass: "glide-project2",
    title: "Youtube To MP3 Converter",
    description: "Desktop application that converts YouTube videos to MP3 format.",
    images: ["YoutubeToMP3.jpeg", "DownloadingProgress.jpeg", "ConvertingProgress.jpeg"],
  },
];

const Projects = () => {
  useEffect(() => {
    const instances = projects.map((p) =>
      new Glide(`.${p.glideClass}`, {
        type: "carousel",
        perView: 1,
        focusAt: "center",
        autoplay: 4000,
        animationDuration: 700,
        gap: 0,
        hoverpause: true,
      }).mount()
    );

    return () => instances.forEach((g) => g.destroy());
  }, []);

  return (
    <div className="py-16 px-6">
      <h2 className="text-[3.5rem] text-center font-bold mb-10">My Projects</h2>

      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <article
            key={project.id}
            className="w-full max-w-6xl mx-auto rounded-2xl p-6 flex flex-col items-center
                       bg-[#27272e]/40 backdrop-blur-md ring-1 ring-[#bfccdb]/15 shadow-2xl"
          >
            <div className={`glide ${project.glideClass} w-full group relative`}>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#1b1b20] ring-1 ring-black/20 shadow-inner">
                <div className="glide__track h-full" data-glide-el="track">
                  <ul className="glide__slides h-full">
                    {project.images.map((img) => (
                      <li key={img} className="glide__slide flex items-center justify-center h-full">
                        <img
                          src={`/projects/${project.id}/${img}`}
                          alt={`${project.title} — ${img.replace(".jpeg", "")}`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Săgeți navigare */}
                <div data-glide-el="controls" className="contents">
                  <button
                    type="button"
                    data-glide-dir="<"
                    aria-label="Poza anterioară"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 grid place-items-center
                               w-10 h-10 rounded-full bg-black/40 text-white backdrop-blur-sm
                               opacity-0 group-hover:opacity-100 focus-visible:opacity-100
                               transition-all duration-300 hover:bg-[#d9b46f] hover:text-[#27272e]"
                  >
                    <FiChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    data-glide-dir=">"
                    aria-label="Poza următoare"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 grid place-items-center
                               w-10 h-10 rounded-full bg-black/40 text-white backdrop-blur-sm
                               opacity-0 group-hover:opacity-100 focus-visible:opacity-100
                               transition-all duration-300 hover:bg-[#d9b46f] hover:text-[#27272e]"
                  >
                    <FiChevronRight size={22} />
                  </button>
                </div>
              </div>

              {/* Buline navigare */}
              <div
                data-glide-el="controls[nav]"
                className="flex items-center justify-center gap-2 mt-4"
              >
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    data-glide-dir={`=${i}`}
                    aria-label={`Mergi la poza ${i + 1}`}
                    className="h-2.5 w-2.5 rounded-full bg-white/30 transition-all duration-300
                               [&.glide__bullet--active]:bg-[#d9b46f] [&.glide__bullet--active]:w-6"
                  />
                ))}
              </div>
            </div>

            <h3 className="text-3xl font-semibold mt-6 text-center">{project.title}</h3>
            <p className="text-gray-300 text-xl mt-2 text-center max-w-3xl">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
