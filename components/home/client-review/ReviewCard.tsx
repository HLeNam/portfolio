import Image from "next/image";

import { QuoteIcon } from "lucide-react";
import { FaStar } from "react-icons/fa6";

interface ReviewCardProps {
  review: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 dark:border-cyan-400 group h-full flex flex-col">
      {/* Quote icon */}
      <QuoteIcon className="w-10 h-10 absolute top-5 right-5 text-blue-500/10 dark:text-cyan-400/10 group-hover:text-blue-500/20 dark:group-hover:text-cyan-400/20 transition-colors duration-300" />

      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="w-4 h-4 text-amber-400" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic flex-1">
        &ldquo;{review.review}&rdquo;
      </p>

      {/* Divider + Author pinned to bottom */}
      <div className="mt-auto">
        <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-5" />
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              src={review.userImage}
              alt={review.name}
              width={48}
              height={48}
              className="rounded-full ring-2 ring-blue-500/20 dark:ring-cyan-400/20"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-800" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              {review.name}
            </p>
            <p className="text-sm text-blue-600 dark:text-cyan-400">
              {review.profession}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
