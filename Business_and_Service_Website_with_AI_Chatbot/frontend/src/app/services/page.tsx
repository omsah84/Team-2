'use client'
import React from 'react'
import dynamic from 'next/dynamic';
const   Hero  = dynamic(() => import('@/components/ServicesHero'), { ssr: false });
const  Services   = dynamic(() => import('@/components/HomeServices'), { ssr: false });

export default function page() {
  return (
    <div>
      <Hero />
      <Services />
      <Services />
    </div>
  )
}
