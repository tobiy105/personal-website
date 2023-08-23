'use client'

import { Contact } from '@/components/contact';
import { Header } from '@/components/header';
import { Projects } from '@/components/projects';
import { AboutMe } from '@/components/aboutme';
import { Work } from '@/components/work';
import { Skills } from '@/components/skills';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import the GooeyBackground component lazily
const DynamicGooeyBackground = dynamic(
  () => import('@/components/gooeybackground').then((module) => module.GooeyBackground),
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
