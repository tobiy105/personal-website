import React from 'react';
import Image from 'next/image';

interface CardProps {
    title: string;
    desc: string;
    img: string;
    tags: string[];
};

export const Card:React.FC<CardProps> = ({ title, desc, img, tags }) => {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px] rounded-md' data-aos='zoom-in-up'>
        <div>
            <Image className='w-[300px] sm:w-[350px] h-auto rounded-md'
                src={img}
                width={350}
                height={350}
                alt={title}
            />
        </div>
        <div className='p-4 space-y-4'>
            <div className='text-4xl font-extralight'>{title}</div>
            <div>{desc}</div>
            <div>
                {tags.map((el => <div className='tags' key={el}>{el}</div>))}
            </div>
        </div>
    </div>
  )
};
