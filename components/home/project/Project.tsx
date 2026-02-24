import { SectionHeading } from "@/components/helper";
import { projects } from "@/data";

import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div id="projects" className="py-16 bg-white dark:bg-gray-900">
      <SectionHeading
        title_1="Featured"
        title_2="Projects"
        description="A selection of my recent work and side projects"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
        {projects.map((project, index) => (
          <div
            className="h-full"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-anchor-placement="top-center"
            key={
              (project.demoUrl ?? "") +
              (project.githubUrl ?? "") +
              project.title
            }
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Project;
