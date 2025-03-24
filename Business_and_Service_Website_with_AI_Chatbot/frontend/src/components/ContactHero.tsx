"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export default function ContactHero() {
  const words = [
    {
      text: "Build",
      className: "text-white dark:text-blue-500",
    },
    {
      text: "awesome",
      className: "text-white dark:text-blue-500",
    },
    {
      text: "web applications",
      className: "text-white dark:text-blue-500",
    },
    {
      text: "with",
      className: "text-white dark:text-blue-500",
    },
    {
      text: "Service Provider.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30rem]  ">
      <p className="text-white dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border border-white dark:border-white border-transparent text-white text-md" onClick={() => window.location.href = 'tel:+918986983491'}>
          Call
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-md" onClick={() => window.open('https://wa.me/+918986983491', '_blank')}>
         Whatsapp
        </button>
      </div>
    </div>
  );
}
