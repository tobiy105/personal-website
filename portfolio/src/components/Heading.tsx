import React from 'react';

interface HeadingProps {
    title: string;
}

export const Heading: React.FC<HeadingProps> = ({title}) => {
  return (
    <div className='text-center text-4xl pb-8'>
        <p className='border-b-4 inline-block pb-2'>{title}</p>
    </div>
  )
};
