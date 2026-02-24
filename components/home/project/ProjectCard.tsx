import Image from "next/image";

import { ExternalLinkIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  demoUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative h-full flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
      {/* IMAGE CONTAINER */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
          <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm font-medium hover:bg-white/30 transition-colors border border-white/30"
              >
                <FaGithub className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* TECH STACKS */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
