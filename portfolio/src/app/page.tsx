'use client'

import { Contact } from '@/components/Contact';
import { Header } from '@/components/Header';
import { Projects } from '@/components/Projects';
import { AboutMe } from '@/components/AboutMe';
import { Work } from '@/components/Work';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import { GooeyBackground } from '@/components/GooeyBackground';

export default function Home() {

  useEffect(() => {
    AOS.init({
      easing: 'ease-in-back',
      duration: 900,
      delay: 50,
      mirror: true,
      anchorPlacement: 'bottom-bottom',
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <GooeyBackground/>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Work/>
      <Contact/>
    </main>
  )
};
