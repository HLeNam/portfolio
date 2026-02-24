"use client";

import { useEffect, useRef, useState } from "react";

import { useTheme } from "next-themes";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
  darkColor?: string;
}

interface SkillMarqueeProps {
  skills: Skill[];
  direction?: "left" | "right";
  speed?: number;
}

export const SkillMarquee = ({
  skills,
  direction = "left",
  speed = 30,
}: SkillMarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animationName =
      direction === "left" ? "marquee-left" : "marquee-right";
    container.style.animationName = animationName;
    container.style.animationDuration = `${speed}s`;
    container.style.animationTimingFunction = "linear";
    container.style.animationIterationCount = "infinite";
    container.style.animationPlayState = isPaused ? "paused" : "running";
  }, [direction, speed, isPaused]);

  const getIconColor = (skill: Skill) => {
    if (isDark && skill.darkColor) return skill.darkColor;
    return skill.color || "#8B5CF6";
  };

  const getBgColor = (skill: Skill) => {
    const color = getIconColor(skill);
    return `${color}20`;
  };

  return (
    <div
      className="overflow-x-clip relative group py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-gray-100 dark:from-gray-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-gray-100 dark:from-gray-950 to-transparent pointer-events-none" />

      <div ref={containerRef} className="flex gap-4 w-max">
        {duplicatedSkills.map((skill, index) => {
          const Icon = skill.icon;
          const iconColor = getIconColor(skill);
          return (
            <div
              key={`${skill.name}-${index}`}
              className="shrink-0 flex items-center gap-3 bg-white dark:bg-gray-900 rounded-xl px-5 py-3 shadow-md border border-gray-200 dark:border-gray-700/50 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group/card"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: getBgColor(skill) }}
              >
                <Icon
                  className="w-6 h-6 transition-all duration-300 group-hover/card:scale-110"
                  style={{ color: iconColor }}
                />
              </div>
              <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
