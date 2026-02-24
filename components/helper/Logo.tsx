export const Logo = () => {
  return (
    <a href="#home" className="group flex items-center gap-1">
      <span className="text-xl md:text-2xl font-bold tracking-tight">
        <span className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
          HLe
        </span>
        <span className="text-blue-600 dark:text-cyan-400">Nam</span>
      </span>
      <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 group-hover:scale-125 transition-transform duration-300" />
    </a>
  );
};
