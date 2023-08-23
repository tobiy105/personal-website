'use client'

import { Contact } from '@/components/Contact';
import { Header } from '@/components/Header';
import { Projects } from '@/components/Projects';
import { AboutMe } from '@/components/AboutMe';
import { Skills } from '@/components/Skills';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import the GooeyBackground component lazily
const DynamicGooeyBackground = dynamic(
  () => import('@/components/GooeyBackground').then((module) => module.GooeyBackground),
  { ssr: false }
);

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-back',
      duration: 1200,
      delay: 50,
      mirror: true,
      anchorPlacement: 'bottom-bottom',
      offset: 160,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <DynamicGooeyBackground />
      <Header />
      <AboutMe />
      <Projects />
      {/* <Work /> */}
      <Skills />
      <Contact />
    </main>
  );
}
