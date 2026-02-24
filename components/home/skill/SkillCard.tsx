import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: IconType;
  color?: string;
}

export const SkillCard = ({ name, icon: Icon, color }: SkillCardProps) => {
  return (
    <div className="group relative bg-white dark:bg-gray-900 shadow-md rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300">
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
        style={{
          backgroundColor: color ? `${color}15` : "rgba(139, 92, 246, 0.1)",
        }}
      >
        <Icon
          className="w-7 h-7 transition-all duration-300 group-hover:scale-110"
          style={{ color: color || "#8B5CF6" }}
        />
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  );
};
