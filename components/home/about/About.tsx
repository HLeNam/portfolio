import { SectionHeading } from "@/components/helper";
import { highlights, stats } from "@/data";

import { TerminalCard } from "./TerminalCard";

const About = () => {
  return (
    <div id="about" className="py-16 bg-white dark:bg-gray-900">
      {/* SECTION HEADING */}
      <SectionHeading
        title_1="About"
        title_2="Me"
        description="Get to know the developer behind the code"
      />

      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        {/* CODE TERMINAL CARD */}
        <div
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-anchor-placement="top-center"
        >
          <TerminalCard />
        </div>

        {/* CONTENT */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-anchor-placement="top-center"
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">
            A passionate developer who loves to create
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Final-year Software Engineering student with strong focus on
            Frontend Engineering using React and Next.js. Experienced in
            building scalable fullstack applications, real-time systems, and
            microservices-based architectures. Passionate about performance
            optimization, clean architecture, and production-ready development.
            Seeking a Frontend/Fullstack Internship to contribute to impactful,
            user-centric products.
          </p>
          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4">
            {highlights.map((highlight) => (
              <div
                key={highlight.text}
                className="flex items-center gap-3 text-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <highlight.icon className="size-4 text-blue-500" />
                </div>
                <span className="text-muted-foreground">{highlight.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="mt-16 w-[80%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-anchor-placement="top-center"
              key={stat.label}
              className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;
