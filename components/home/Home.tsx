"use client";

import { useEffect } from "react";

import AOS from "aos";

import About from "./about";
import ClientReview from "./client-review";
import Contact from "./contact";
import Experience from "./experience";
import Hero from "./hero";
import Project from "./project";
import Skill from "./skill";

import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skill />
      <Project />
      <Experience />
      <ClientReview />
      <Contact />
    </div>
  );
};
export default Home;
