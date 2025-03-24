'use client'
import dynamic from 'next/dynamic';
const HeroSection = dynamic(() => import('@/components/HomeHero'), { ssr: false });
const Services = dynamic(() => import('@/components/HomeServices'), { ssr: true });
const Works = dynamic(() => import('@/components/HomeWorks'), { ssr: true });
const Features = dynamic(() => import('@/components/HomeFeatures'), { ssr: false });
import { HeroParallax } from '@/components/ui/hero-parallax';
import Testimobial from "@/components/HomeTestimonials"
import { products } from "@/data/data";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Testimobial />
      <Services />
      <Works />
      <Features />
      <HeroParallax products={products} />;
    </>
  );
}


