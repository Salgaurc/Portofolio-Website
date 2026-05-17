import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const Projects = () => {
  useEffect(() => {
    new Glide(".glide-project1", {
      type: "carousel",
      perView: 1,
      focusAt: "center",
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      breakpoints: {
        1024: {
          perView: 1,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    new Glide(".glide-project2", {
      type: "carousel",
      perView: 1,
      focusAt: "center",
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      hoverpause: true,
      breakpoints: {
        1024: {
          perView: 1,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();
  }, []);

  return (
    <section className="py-12 px-6">
      <h2 className="text-[3.5rem] text-[var(--grey-brand)] text-center mx-auto font-bold">
  My Projects
</h2>
      <div className="flex flex-col space-y-6">
        {/* Project 1 */}
        <div className="w-full max-w-6xl mx-auto bg-white/30 backdrop-blur-md rounded-lg p-4 relative h-[700px] flex flex-col items-center justify-center pt-8">
          <div className="glide glide-project1">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides h-full flex items-center justify-center">
                <li className="glide__slide p-0 m-0 flex items-center justify-center h-full">
                  <img
                    src="/src/assets/projects/project1/LoginPage.jpeg"
                    alt="Project 1 Slide 1"
                    className="h-[500px] max-w-full object-contain mx-auto my-auto rounded-md w-full"
                  />
                </li>
                <li className="glide__slide p-0 m-0 flex items-center justify-center h-full">
                  <img
                    src="/src/assets/projects/project1/MainPage.jpeg"
                    alt="Project 1 Slide 2"
                    className="h-[500px] max-w-full object-contain mx-auto my-auto rounded-md w-full"
                  />
                </li>
                <li className="glide__slide p-0 m-0 flex items-center justify-center h-full">
                  <img
                    src="/src/assets/projects/project1/FlatDetails.jpeg"
                    alt="Project 1 Slide 3"
                    className="h-[500px] max-w-full object-contain mx-auto my-auto rounded-md w-full"
                  />
                </li>
                <li className="glide__slide p-0 m-0 flex items-center justify-center h-full">
                  <img
                    src="/src/assets/projects/project1/AddFlatModal.jpeg"
                    alt="Project 1 Slide 4"
                    className="h-[500px] max-w-full object-contain mx-auto my-auto rounded-md w-full"
                  />
                </li>
                <li className="glide__slide p-0 m-0 flex items-center justify-center h-full">
                  <img
                    src="/src/assets/projects/project1/AdminDashboard.jpeg"
                    alt="Project 1 Slide 5"
                    className="h-[500px] max-w-full object-contain mx-auto my-auto rounded-md w-full"
                  />
                </li>
                <li className="glide__slide p-0 m-0 flex items-center justify-center h-full">
                  <img
                    src="/src/assets/projects/project1/FilterOptions.jpeg"
                    alt="Project 1 Slide 6"
                    className="h-[500px] max-w-full object-contain mx-auto my-auto rounded-md w-full"
                  />
                </li>
                <li className="glide__slide p-0 m-0 flex items-center justify-center h-full">
                  <img
                    src="/src/assets/projects/project1/SortOptions.jpeg"
                    alt="Project 1 Slide 7"
                    className="h-[500px] max-w-full object-contain mx-auto my-auto rounded-md w-full"
                  />
                </li>
                <li className="glide__slide p-0 m-0 flex items-center justify-center h-full">
                  <img
                    src="/src/assets/projects/project1/MessagesModal.jpeg"
                    alt="Project 1 Slide 8"
                    className="h-[500px] max-w-full object-contain mx-auto my-auto rounded-md w-full"
                  />
                </li>
                <li className="glide__slide p-0 m-0 flex items-center justify-center h-full">
                  <img
                    src="/src/assets/projects/project1/UpdateProfile.jpeg"
                    alt="Project 1 Slide 9"
                    className="h-[500px] max-w-full object-contain mx-auto my-auto rounded-md w-full"
                  />
                </li>
              </ul>
            </div>
            <div className="glide__bullets flex justify-center mt-2" data-glide-el="controls[nav]">
              <button className="glide__bullet mx-1" data-glide-dir="=0"></button>
              <button className="glide__bullet mx-1" data-glide-dir="=1"></button>
              <button className="glide__bullet mx-1" data-glide-dir="=2"></button>
              <button className="glide__bullet mx-1" data-glide-dir="=3"></button>
              <button className="glide__bullet mx-1" data-glide-dir="=4"></button>
              <button className="glide__bullet mx-1" data-glide-dir="=5"></button>
              <button className="glide__bullet mx-1" data-glide-dir="=6"></button>
              <button className="glide__bullet mx-1" data-glide-dir="=7"></button>
              <button className="glide__bullet mx-1" data-glide-dir="=8"></button>
            </div>
          </div>
          <h1 className="text-gray-800 text-3xl font-semibold mb-2">Flatfinder Rental Platform</h1>
          <p className="text-gray-700 mb-4 text-3xl">
            A rental platform web application where users can browse, filter, and sort rental listings, view detailed information about each property, and contact landlords. Admins can manage listings and user profiles.
          </p>
          <a
            href="https://github.com/Salgaurc/Final-Project-Flatfinder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-medium hover:underline text-3xl"
          >
            View Project on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="w-full max-w-6xl mx-auto bg-white/30 backdrop-blur-md rounded-lg p-4 relative h-[700px] flex flex-col items-center justify-center pt-8">
          <div className="glide glide-project2">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides h-full flex items-center justify-center">
                <li className="glide__slide p-0 m-0 flex items-center justify-center h-full">
                  <img
                    src="/src/assets/projects/project2/YoutubeToMP3.jpeg"
                    alt="Project 2 Slide 1"
                    className="h-[500px] max-w-full object-contain mx-auto my-auto rounded-md w-full"
                  />
                </li>
                <li className="glide__slide p-0 m-0 flex items-center justify-center h-full">
                  <img
                    src="/src/assets/projects/project2/DownloadingProgress.jpeg"
                    alt="Project 2 Slide 2"
                    className="h-[500px] max-w-full object-contain mx-auto my-auto rounded-md w-full"
                  />
                </li>
                <li className="glide__slide p-0 m-0 flex items-center justify-center h-full">
                  <img
                    src="/src/assets/projects/project2/ConvertingProgress.jpeg"
                    alt="Project 2 Slide 3"
                    className="h-[500px] max-w-full object-contain mx-auto my-auto rounded-md w-full"
                  />
                </li>
              </ul>
            </div>
            <div className="glide__bullets flex justify-center mt-2" data-glide-el="controls[nav]">
              <button className="glide__bullet mx-1" data-glide-dir="=0"></button>
              <button className="glide__bullet mx-1" data-glide-dir="=1"></button>
              <button className="glide__bullet mx-1" data-glide-dir="=2"></button>
            </div>
          </div>
          <h3 className="text-gray-700 text-3xl font-semibold mb-2">Youtube To MP3 Converter</h3>
          <p className="text-gray-600 mb-4 text-3xl">
            A desktop application that allows users to convert YouTube videos to MP3 format. Users can input a YouTube URL, and the app will download and convert the video, displaying progress throughout the process.
          </p>
          <a
            href="https://github.com/Salgaurc/Youtube-to-MP3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-medium hover:underline text-3xl"
          >
            View Project on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;