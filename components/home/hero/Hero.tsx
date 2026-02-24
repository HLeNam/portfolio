"use client";

import { DownloadIcon, FolderOpenIcon } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import { FloatingShapes } from "./FloatingShapes";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen bg-[radial-gradient(circle_476px_at_54.8%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_100.2%)] flex items-center justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,rgba(10,60,100,1)_0.1%,rgba(10,15,30,1)_90%)]"
    >
      {/* FLOATING SHAPES */}
      <FloatingShapes />

      {/* CONTENT */}
      <div className="relative z-10 text-center">
        <div data-aos="fade-up" className="sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for opportunities
          </span>
        </div>

        {/* TITLE */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="text-blue-600 dark:text-cyan-400">Nam</span>
        </h1>

        {/* TYPEWRITE EFFECTS */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12"
        >
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2000,
              "Backend Developer",
              2000,
              "Frontend Developer",
              2000,
              "Mobile Developer",
              2000,
              "Web Developer",
              2000,
              "Software Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono"
          />
        </div>

        {/* DESCRIPTION */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10"
        >
          Crafting exceptional digital experiences with modern technologies.
          Passionate about building scalable applications.
        </p>

        {/* BUTTONS */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Primary - Filled */}
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            <FolderOpenIcon className="size-5 group-hover:rotate-6 transition-transform" />
            View Projects
          </a>
          {/* Secondary - Outline */}
          <a
            href="https://drive.google.com/file/d/1cEJRIqhn_0fvxUJsYhOPAitodw7FNIiP/view?usp=drive_link"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl hover:border-blue-500 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:-translate-y-0.5 backdrop-blur-sm transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon className="size-5 group-hover:translate-y-0.5 transition-transform" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
