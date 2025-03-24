"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function Services() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10 bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold text-neutral-100 font-sans">
        Exclusive Services
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Web Development",
    title: "Custom Website Development Services",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Mobile App Development",
    title: "Cross-Platform Mobile App Solutions",
    src: "https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "API Development",
    title: "Robust API Development and Integration",
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "UI/UX Design",
    title: "User-Centric UI/UX Design Services",
    src: "https://images.unsplash.com/photo-1690369519543-c81a2121f740?q=80&w=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Cybersecurity",
    title: "Comprehensive Cybersecurity Services",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "E-commerce Development",
    title: "Custom E-commerce Solutions",
    src: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "AI and ML",
    title: "Artificial Intelligence and Machine Learning Services",
    src: "https://images.unsplash.com/photo-1517430816045-df4b7de20db2?q=80&w=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Digital Marketing",
    title: "SEO and Digital Marketing Services",
    src: "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "DevOps",
    title: "DevOps and Automation Solutions",
    src: "https://images.unsplash.com/photo-1565182999561-30fbc23e54a3?q=80&w=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Data Analytics",
    title: "Data Analytics and Visualization",
    src: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Blockchain",
    title: "Blockchain Development Services",
    src: "https://images.unsplash.com/photo-1600376014168-a2b3d22df8e5?q=80&w=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Game Development",
    title: "Game Design and Development Services",
    src: "https://images.unsplash.com/photo-1600585153143-6341b31d547d?q=80&w=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "IT Consulting",
    title: "Expert IT Consulting Services",
    src: "https://images.unsplash.com/photo-1591917440407-d58dbb6ec7f0?q=80&w=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
];
