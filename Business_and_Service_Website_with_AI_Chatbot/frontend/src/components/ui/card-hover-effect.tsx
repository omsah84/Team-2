'use client';
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-4 sm:px-8 bg-gradient-to-b from-gray-900 to-black",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-800 via-pink-700 to-red-600 opacity-90 rounded-3xl shadow-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.3, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            title={item.title}
            description={item.description}
            link={item.link}
          />
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  title,
  description,
  link,
  className,
}: {
  title: string;
  description: string;
  link: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 sm:p-8 overflow-hidden bg-gradient-to-t from-gray-800 to-gray-700 border border-gray-600 shadow-lg group-hover:shadow-pink-500/50 transform transition duration-300 group-hover:scale-105 group-hover:rotate-1 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 mt-6">
          <Link
            href="#code-link" // Replace with the actual code URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white/10 backdrop-blur-md text-white text-center py-2 rounded-lg shadow-md hover:bg-purple-600 hover:text-gray-100 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            Code
          </Link>
          <Link
            href={link} // Live link from the item object
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white/10 backdrop-blur-md text-white text-center py-2 rounded-lg shadow-md hover:bg-pink-600 hover:text-gray-100 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            Live
          </Link>
        </div>
      </div>
      {/* Moving Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent rounded-xl animate-borderEffect" />
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-white font-extrabold tracking-wide mt-4 text-2xl group-hover:text-pink-400 transition-colors duration-200",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-gray-400 group-hover:text-gray-200 tracking-wide leading-relaxed text-base transition-colors duration-200",
        className
      )}
    >
      {children}
    </p>
  );
};
