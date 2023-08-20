import React from 'react';
import { Heading } from './Heading';
import { WorkCard } from './WorkCard';

const testimaonialData = [
    {
        companyName: 'Google',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        img: "/profile.jpg",
        name: 'Oluwatobi',
        designation: 'Software Engineer',
    },

    {
        companyName: 'Google',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        img: "/profile.jpg",
        name: 'Oluwatobi',
        designation: 'Software Engineer',
    },

    {
        companyName: 'Google',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        img: "/profile.jpg",
        name: 'Oluwatobi',
        designation: 'Software Engineer',
    },
]

export const Work = () => {
  return (
    <div className='container pt-32' id='work'>
        <Heading title='Testimonials' />
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {testimaonialData.map((item, index) => (
                <WorkCard 
                    key={index} 
                    companyName={item.companyName}
                    desc={item.desc}
                    img={item.img}
                    name={item.name}
                    designation={item.designation}
                />
            ))}
        </div>
    </div>
  )
};
