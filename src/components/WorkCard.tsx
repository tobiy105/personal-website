import React from 'react';
import Image from 'next/image';

interface propsType { 
    companyName: string;
    desc: string;
    img: string;
    name: string;
    designation: string;
};

export const WorkCard:React.FC<propsType> = ({ companyName, desc, img, name, designation }) => {
  return (
    <div data-aos='zoom-in-up'>
      <div className='border border-accent p-8 h-[450px] flex flex-col justify-between rounded-md'>
          <h2 className='text-3xl text-accent'>{companyName}</h2>
          <p>{desc}</p>
          <div className='flex gap-4'>
              <Image className='grayscale rounded-full' src={img} alt='user' width={50} height={50} />

              <div>
                  <h2>{name}</h2>
                  <p className='text-gray-500'>{designation}</p>
              </div>
          </div>
      </div>
    </div>
  )
};
