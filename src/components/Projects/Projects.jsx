import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const Projects = () => {
  useEffect(() => {
    const glide1 = new Glide(".glide-project1", {
      type: "carousel",
      perView: 1,
      focusAt: "center",
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      hoverpause: true,
    });

    const glide2 = new Glide(".glide-project2", {
      type: "carousel",
      perView: 1,
      focusAt: "center",
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      hoverpause: true,
    });

    glide1.mount();
    glide2.mount();

    return () => {
      glide1.destroy();
      glide2.destroy();
    };
  }, []);

  const slideImgClass =
    "max-h-[500px] w-auto object-contain mx-auto rounded-md";

  const slideClass =
    "glide__slide flex items-center justify-center min-w-0";

  return (
    <section className="py-12 px-6">
      <h2 className="text-[3.5rem] text-center font-bold">
        My Projects
      </h2>

      <div className="flex flex-col space-y-6">

        {/* PROJECT 1 */}
        <div className="w-full max-w-6xl mx-auto bg-white/30 backdrop-blur-md rounded-lg p-4 h-[700px] overflow-hidden flex flex-col items-center justify-center">

          <div className="glide glide-project1 w-full">
            <div className="glide__track overflow-hidden" data-glide-el="track">
              <ul className="glide__slides">

                <li className={slideClass}>
                  <img src="/projects/project1/LoginPage.jpeg" className={slideImgClass} />
                </li>

                <li className={slideClass}>
                  <img src="/projects/project1/MainPage.jpeg" className={slideImgClass} />
                </li>

                <li className={slideClass}>
                  <img src="/projects/project1/FlatDetails.jpeg" className={slideImgClass} />
                </li>

                <li className={slideClass}>
                  <img src="/projects/project1/AddFlatModal.jpeg" className={slideImgClass} />
                </li>

                <li className={slideClass}>
                  <img src="/projects/project1/AdminDashboard.jpeg" className={slideImgClass} />
                </li>

                <li className={slideClass}>
                  <img src="/projects/project1/FilterOptions.jpeg" className={slideImgClass} />
                </li>

                <li className={slideClass}>
                  <img src="/projects/project1/SortOptions.jpeg" className={slideImgClass} />
                </li>

                <li className={slideClass}>
                  <img src="/projects/project1/MessagesModal.jpeg" className={slideImgClass} />
                </li>

                <li className={slideClass}>
                  <img src="/projects/project1/UpdateProfile.jpeg" className={slideImgClass} />
                </li>

              </ul>
            </div>
          </div>

          <h1 className="text-3xl font-semibold mt-4">
            Flatfinder Rental Platform
          </h1>

          <p className="text-gray-700 text-xl mt-2 text-center">
            A rental platform web application where users can browse, filter, and manage listings.
          </p>
        </div>

        {/* PROJECT 2 */}
        <div className="w-full max-w-6xl mx-auto bg-white/30 backdrop-blur-md rounded-lg p-4 h-[700px] overflow-hidden flex flex-col items-center justify-center">

          <div className="glide glide-project2 w-full">
            <div className="glide__track overflow-hidden" data-glide-el="track">
              <ul className="glide__slides">

                <li className={slideClass}>
                  <img src="/projects/project2/YoutubeToMP3.jpeg" className={slideImgClass} />
                </li>

                <li className={slideClass}>
                  <img src="/projects/project2/DownloadingProgress.jpeg" className={slideImgClass} />
                </li>

                <li className={slideClass}>
                  <img src="/projects/project2/ConvertingProgress.jpeg" className={slideImgClass} />
                </li>

              </ul>
            </div>
          </div>

          <h3 className="text-3xl font-semibold mt-4">
            Youtube To MP3 Converter
          </h3>

          <p className="text-gray-600 text-xl mt-2 text-center">
            Desktop application that converts YouTube videos to MP3 format.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;