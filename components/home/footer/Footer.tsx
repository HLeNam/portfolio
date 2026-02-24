import { Heart } from "lucide-react";

import { Logo } from "@/components/helper";
import { footerSocialLinks } from "@/data";

const Footer = () => {
  return (
    <footer className="border-t bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 py-12">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          <div className="flex items-center gap-3">
            {footerSocialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-cyan-400/25 transition-all duration-300"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
            by
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              HLeNam
            </span>
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
