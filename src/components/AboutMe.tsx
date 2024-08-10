import React from 'react';
import { Heading } from './Heading';
import profile from '../../public/profile.jpg';
import Image from 'next/image';

export const AboutMe = () => {
  return (
    <div className='container pt-32' id='about'>
      <div className='bg-gray-700 bg-opacity-60 border border-accent p-8 rounded-md'>    
        <Heading title='About Me'/>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2 text-center mb-4 md:mb-0' data-aos='zoom-in-up'>
            <Image
              src={profile}
              className='w-32 h-32 md:w-48 md:h-48 lg:w-96 lg:h-96 rounded-full mx-auto border border-accent' 
              alt='Profile'
            />
          </div>
          <div className='md:w-1/2 mb-4 md:mb-0' data-aos='zoom-in-up'>
            <p>
              My name is Oluwatobi Sobola. I graduated from the University of Leeds with a degree in MEng Computer Science with AI. My goal is to pursue this passion within the field of software engineering. In my free time, I like working on open-source projects. I possess a deep enthusiasm for learning and growth. Additionally, I&apos;m a passionate rugby player, combining teamwork and dedication both on and off the field.
            </p>
            <div className='mt-4 flex justify-center'>
              <a href='https://docs.google.com/document/d/1LEu_jvKifI-2Df8Amh3UWAWuBNMDJWGrwkjzYmjqsPU/edit?usp=sharing' target='_blank' rel='noopener noreferrer' className='bg-gray-700 bg-opacity-60 border border-accent text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out'>Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
