import { SectionHeading } from "@/components/helper";
import { skillCategories } from "@/data";

import { SkillMarquee } from "./SkillMarquee";

const Skill = () => {
  return (
    <div id="skills" className="py-16 bg-gray-100 dark:bg-gray-950">
      <SectionHeading
        title_1="Technical"
        title_2="Skills"
        description="Technologies I've been working with recently"
      />

      <div className="space-y-10 max-w-full">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3 w-[80%] mx-auto">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              {category.title}
            </h3>
            <SkillMarquee
              skills={category.skills}
              direction={index % 2 === 0 ? "left" : "right"}
              speed={35}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skill;
