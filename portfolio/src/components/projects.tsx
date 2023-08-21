import React from 'react';
// import crypticchat1 from '%PUBLIC_URL%/crypticchat1.png';
// import crypticchat2 from '%PUBLIC_URL%/crypticchat2.png';
import { Heading } from './Heading';
import { Card } from './Card';

// const crypticchat = [
//     {
//       image: crypticchat1,
//       title: 'Cryptic Chat: Log In',
//       link: 'https://cryptichat.benmitchell.dev/',
//     },
//     {
//       image: crypticchat2,
//       title: 'Cryptic Chat: Log In',
//       link: 'https://cryptichat.benmitchell.dev/',
//     },
//   ];

const data = [ 
    {
    id: 0,
    title: 'Cryptic Chat: Log In',
    desc: 'End-to-end encrypted chat app with a React and Vite frontend and a GraphQL API.',
    img: '/crypticchat1.webp',
    tags: ['React', 'Tailwind', 'Vite', 'GraphQL', 'Apollo', 'Docker'],
    },

    {
        id: 1,
        title: 'Cryptic Chat: Log In',
        desc: 'End-to-end encrypted chat app with a React and Vite frontend and a GraphQL API.',
        img: '/crypticchat1.webp',
        tags: ['React', 'Tailwind', 'Vite', 'GraphQL', 'Apollo', 'Docker'],
    },

    {
        id: 2,
        title: 'Cryptic Chat: Log In',
        desc: 'End-to-end encrypted chat app with a React and Vite frontend and a GraphQL API.',
        img: '/crypticchat1.webp',
        tags: ['React', 'Tailwind', 'Vite', 'GraphQL', 'Apollo', 'Docker'],
    },

    {
        id: 3,
        title: 'Cryptic Chat: Log In',
        desc: 'End-to-end encrypted chat app with a React and Vite frontend and a GraphQL API.',
        img: '/crypticchat1.webp',
        tags: ['React', 'Tailwind', 'Vite', 'GraphQL', 'Apollo', 'Docker'],
    },

    {
        id: 4,
        title: 'Cryptic Chat: Log In',
        desc: 'End-to-end encrypted chat app with a React and Vite frontend and a GraphQL API.',
        img: '/crypticchat1.webp',
        tags: ['React', 'Tailwind', 'Vite', 'GraphQL', 'Apollo', 'Docker'],
    },

    {
        id: 5,
        title: 'Cryptic Chat: Log In',
        desc: 'End-to-end encrypted chat app with a React and Vite frontend and a GraphQL API.',
        img: '/crypticchat1.webp',
        tags: ['React', 'Tailwind', 'Vite', 'GraphQL', 'Apollo', 'Docker'],
        },

];

export const Projects = () => {
  return (
    <div className='container pt-32' id='projects'>
        <div className='bg-gray-700 bg-opacity-60 border border-accent p-8 rounded-md'>    
            <Heading title='My Projects'/>
            <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el) => (
                    <Card 
                        key={el.id}
                        title={el.title}
                        desc={el.desc}
                        img={el.img}
                        tags={el.tags}
                    />
                ))}
            </div>
        </div>
    </div>
  )
};
