"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative min-h-[80vh] flex items-center justify-center w-full group overflow-hidden bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500",
        "sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[90vh]", // Adjust height for small, medium, and large screens
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic radial gradient on mouse move */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1) -200%,
              rgba(0, 0, 0, 0.7) 50%
            )
          `,
        }}
      />

      {/* Enhanced Attractive Music Animated Frequency Wave */}
      <div className="absolute bottom-0 left-0 w-full h-40 flex justify-around items-end">
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-2 mx-1 rounded-lg"
            style={{
              background: `linear-gradient(to bottom, rgba(${
                Math.random() * 255
              }, ${Math.random() * 255}, ${Math.random() * 255}, 0.8), rgba(${
                Math.random() * 255
              }, ${Math.random() * 255}, ${Math.random() * 255}, 0.6))`, // Random vibrant gradient
              boxShadow: `0 0 10px rgba(${Math.random() * 255}, ${
                Math.random() * 255
              }, ${Math.random() * 255}, 0.5)`, // Random glowing effect
            }}
            initial={{ height: "10%", scale: 1, rotate: 0 }}
            animate={{
              height: [
                "20%",
                `${Math.random() * 80 + 20}%`,
                "40%",
                `${Math.random() * 70 + 30}%`,
              ],
              scale: [1, 1.2, 1, 1.15], // Slight scale variation for depth
              rotate: ["0deg", "5deg", "-5deg", "0deg"], // Subtle rotation effect
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Foreground content with enhanced styling */}
      <div
        className={cn(
          "relative z-20 text-center text-white font-bold px-6 sm:px-8",
          className
        )}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 animate__animated animate__fadeIn">
          {children}
        </h1>
        {/* Add animated CTA button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-gray-800 px-6 py-3 rounded-lg text-xl font-semibold transition-all ease-in-out duration-900 transform hover:bg-gray-200"
        >
          <Link href={"/contact"}>
          Get Started
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.2,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
        textShadow: "0px 3px 8px rgba(0, 0, 0, 0.3)", // Subtle glow
      }}
      className={cn(
        `relative inline-block pb-1 px-2 rounded-md bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-semibold transition-all ease-in-out duration-300 transform hover:scale-105`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
