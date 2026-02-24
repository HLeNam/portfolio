"use client";

const shapes = [
  // Large colorful circles
  {
    size: 90,
    x: "8%",
    y: "18%",
    delay: 0,
    duration: 20,
    light: "rgba(59,130,246,0.15)",
    dark: "rgba(6,182,212,0.2)",
  },
  {
    size: 130,
    x: "83%",
    y: "12%",
    delay: 2,
    duration: 25,
    light: "rgba(6,182,212,0.15)",
    dark: "rgba(99,102,241,0.2)",
  },
  {
    size: 70,
    x: "72%",
    y: "68%",
    delay: 4,
    duration: 18,
    light: "rgba(168,85,247,0.12)",
    dark: "rgba(236,72,153,0.15)",
  },
  {
    size: 110,
    x: "18%",
    y: "72%",
    delay: 1,
    duration: 22,
    light: "rgba(14,165,233,0.14)",
    dark: "rgba(34,211,238,0.18)",
  },
  {
    size: 50,
    x: "50%",
    y: "8%",
    delay: 3,
    duration: 15,
    light: "rgba(236,72,153,0.12)",
    dark: "rgba(168,85,247,0.18)",
  },
  {
    size: 65,
    x: "38%",
    y: "55%",
    delay: 5,
    duration: 19,
    light: "rgba(99,102,241,0.12)",
    dark: "rgba(6,182,212,0.15)",
  },

  // Vivid small dots
  {
    size: 8,
    x: "15%",
    y: "40%",
    delay: 0,
    duration: 12,
    light: "rgba(59,130,246,0.5)",
    dark: "rgba(34,211,238,0.6)",
  },
  {
    size: 6,
    x: "80%",
    y: "42%",
    delay: 1.5,
    duration: 10,
    light: "rgba(6,182,212,0.5)",
    dark: "rgba(99,102,241,0.6)",
  },
  {
    size: 7,
    x: "45%",
    y: "78%",
    delay: 3,
    duration: 14,
    light: "rgba(168,85,247,0.45)",
    dark: "rgba(236,72,153,0.55)",
  },
  {
    size: 5,
    x: "88%",
    y: "82%",
    delay: 0.5,
    duration: 11,
    light: "rgba(14,165,233,0.5)",
    dark: "rgba(34,211,238,0.55)",
  },
  {
    size: 6,
    x: "32%",
    y: "22%",
    delay: 2.5,
    duration: 13,
    light: "rgba(236,72,153,0.4)",
    dark: "rgba(168,85,247,0.5)",
  },
  {
    size: 5,
    x: "62%",
    y: "52%",
    delay: 4,
    duration: 16,
    light: "rgba(99,102,241,0.45)",
    dark: "rgba(6,182,212,0.55)",
  },
  {
    size: 4,
    x: "25%",
    y: "58%",
    delay: 1,
    duration: 9,
    light: "rgba(59,130,246,0.5)",
    dark: "rgba(236,72,153,0.5)",
  },
  {
    size: 7,
    x: "75%",
    y: "28%",
    delay: 3.5,
    duration: 17,
    light: "rgba(6,182,212,0.45)",
    dark: "rgba(99,102,241,0.5)",
  },
];

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            animation: `float-${i % 3} ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
            background: `var(--shape-color-${i})`,
          }}
        >
          <style>{`
            :root { --shape-color-${i}: ${shape.light}; }
            .dark { --shape-color-${i}: ${shape.dark}; }
          `}</style>
        </div>
      ))}

      {/* Large gradient orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(168,85,247,0.1) 40%, transparent 70%)",
          left: "-10%",
          top: "25%",
          animation: "float-0 30s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(236,72,153,0.08) 40%, transparent 70%)",
          right: "-5%",
          top: "10%",
          animation: "float-1 25s ease-in-out 2s infinite",
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)",
          left: "30%",
          bottom: "-5%",
          animation: "float-2 28s ease-in-out 1s infinite",
        }}
      />
    </div>
  );
};
