import React from 'react';
import { Heading } from './Heading';
import profile from '../../public/profile.jpg';
import Image from 'next/image';

export const AboutMe = () => {
  return (
    <div className='container pt-32' id='about'>
        <div className='bg-gray-700 bg-opacity-60 border border-accent p-8 rounded-md'>    
            <Heading title='About Me'/>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold font-sagona mb-2">About Me</h2>
                    <p>
                        Enthusiastic and hardworking computer programmer skilled in C++, Python, and JavaScript, with expertise in software development tools and technologies such as Git and Visual Studio Code. Passionate about continuous learning and development.
                    </p>
                </div>
                <div className="md:w-1/2 text-center">
                    <Image src={profile} className="w-32 h-32 rounded-full mx-auto" alt="Profile" />
                </div>
            </div>
            <div className='grid md:grid-cols-2 items-center'>
                <div data-aos='zoom-in-up'>
                    <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                    <p className='text-white pt-2'>I have worked with a range a technologies in the web development world. From Back-end To Design
                    </p>
                </div>
                <div data-aos='zoom-in-up'>
                    <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                        <div className='space-y-2'>
                            <h2 data-aos='zoom-in-up'>Next.js</h2>
                            <h2 data-aos='zoom-in-up'>Remix.js</h2>
                            <h2 data-aos='zoom-in-up'>React.js</h2>
                        </div>
                        <div className='space-y-2'>
                            <h2 data-aos='zoom-in-up'>Tailwind</h2>
                            <h2 data-aos='zoom-in-up'>CSS</h2>
                            <h2 data-aos='zoom-in-up'>Node.js</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};
