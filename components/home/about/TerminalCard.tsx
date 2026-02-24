"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const codeLines = [
  { type: "open", content: "{" },
  {
    type: "field",
    key: "name",
    value: '"Hoang Le Nam"',
    keyColor: "text-sky-400",
    valueColor: "text-green-400",
    comma: true,
  },
  {
    type: "field",
    key: "role",
    value: '"Full-Stack Developer"',
    keyColor: "text-sky-400",
    valueColor: "text-green-400",
    comma: true,
  },
  {
    type: "field",
    key: "experience",
    value: '"< 1 year"',
    keyColor: "text-sky-400",
    valueColor: "text-orange-400",
    comma: true,
  },
  {
    type: "field",
    key: "location",
    value: '"Ho Chi Minh City, Vietnam"',
    keyColor: "text-sky-400",
    valueColor: "text-green-400",
    comma: true,
  },
  {
    type: "field",
    key: "education",
    value:
      '"Information Technology @ University of Science - Ho Chi Minh City"',
    keyColor: "text-sky-400",
    valueColor: "text-green-400",
    comma: true,
  },
  {
    type: "array-start",
    key: "passions",
    keyColor: "text-sky-400",
  },
  {
    type: "array-item",
    value: '"Building Products"',
    valueColor: "text-cyan-400",
    comma: true,
  },
  {
    type: "array-item",
    value: '"Learning new things"',
    valueColor: "text-cyan-400",
    comma: true,
  },
  { type: "array-end" },
  {
    type: "field",
    key: "available",
    value: "true",
    keyColor: "text-sky-400",
    valueColor: "text-yellow-400",
    comma: false,
  },
  { type: "close", content: "}" },
];

export const TerminalCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [visibleLines, setVisibleLines] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const hasAnimated = useRef(false);

  // Typing animation - triggered once when component mounts
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let currentLine = 0;
    const interval = setInterval(() => {
      currentLine++;
      setVisibleLines(currentLine);
      if (currentLine >= codeLines.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // 3D tilt effect
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    );
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    );
    setGlare({ x: 50, y: 50, opacity: 0 });
  }, []);

  const renderLine = (line: (typeof codeLines)[number], index: number) => {
    const isVisible = index < visibleLines;

    return (
      <div
        key={index}
        className={`transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
      >
        {line.type === "open" && (
          <div className="text-gray-500">{"{"}&nbsp;</div>
        )}
        {line.type === "close" && <div className="text-gray-500">{"}"}</div>}
        {line.type === "field" && (
          <div className="pl-4">
            <span className={line.keyColor}>&quot;{line.key}&quot;</span>
            <span className="text-gray-400">: </span>
            <span className={line.valueColor}>{line.value}</span>
            {line.comma && <span className="text-gray-400">,</span>}
          </div>
        )}
        {line.type === "array-start" && (
          <div className="pl-4">
            <span className={line.keyColor}>&quot;{line.key}&quot;</span>
            <span className="text-gray-400">: [</span>
          </div>
        )}
        {line.type === "array-item" && (
          <div className="pl-8">
            <span className={line.valueColor}>{line.value}</span>
            {line.comma && <span className="text-gray-400">,</span>}
          </div>
        )}
        {line.type === "array-end" && (
          <div className="pl-4">
            <span className="text-gray-400">],</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group"
      style={{
        transform,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Rotating border gradient */}
      <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 animate-[spin_4s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, #2563eb, #06b6d4, #0ea5e9, #3b82f6, #06b6d4, #2563eb)",
          }}
        />
      </div>

      {/* Outer glow that follows rotation */}
      <div
        className="absolute -inset-2 rounded-2xl opacity-40 blur-xl animate-[spin_4s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 0deg, #2563eb, #06b6d4, #0ea5e9, #3b82f6, #06b6d4, #2563eb)",
        }}
      />

      {/* Card body */}
      <div className="relative bg-gray-900 dark:bg-gray-950 rounded-2xl overflow-hidden shadow-2xl">
        {/* Glare effect on hover */}
        <div
          className="pointer-events-none absolute inset-0 z-30 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.25), transparent 60%)`,
          }}
        />

        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-900 border-b border-gray-700/50">
          <div className="w-3 h-3 rounded-full bg-red-500 group-hover:shadow-[0_0_8px_rgba(239,68,68,0.6)] transition-shadow duration-300" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 group-hover:shadow-[0_0_8px_rgba(234,179,8,0.6)] transition-shadow duration-300" />
          <div className="w-3 h-3 rounded-full bg-green-500 group-hover:shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-shadow duration-300" />
          <span className="ml-3 text-xs text-gray-400 font-mono">
            ~/about-me.json
          </span>
        </div>

        {/* Code Content */}
        <div className="p-6 font-mono text-sm leading-relaxed">
          {codeLines.map((line, index) => renderLine(line, index))}

          {/* Blinking cursor */}
          <div
            className={`mt-2 flex items-center gap-1 transition-opacity duration-500 ${typingDone ? "opacity-100" : "opacity-0"}`}
          >
            <span className="text-green-400">❯</span>
            <span className="w-2 h-5 bg-green-400 animate-[blink_1s_steps(2)_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
};
