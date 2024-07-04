import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  desc: string;
  imgs: string[];
  tags: string[];
  extra_desc: string;
  extra_imgs: string[];
  onReadMoreClick: () => void; 
}

export const Card: React.FC<CardProps> = ({
  title,
  desc,
  imgs,
  tags,
  extra_desc,
  extra_imgs,
  onReadMoreClick, 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageOpacity(0);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgs.length);
        setImageOpacity(1);
      }, 500);
    }, 6000);

    return () => clearInterval(imageInterval);
  }, [imgs]);

  return (
    <div className="border border-accent h-auto w-[265px] sm:w-[350px] rounded-md hover:shadow-2xl" data-aos="zoom-in-up">
      <div className="relative">
        <div
          style={{
            opacity: imageOpacity,
            transition: 'opacity 2s',
          }}
          className={`w-[265px] sm:w-[350px] h-[180px] sm:h-[200px] rounded-t-md`}
        >
          <Image
            src={imgs[currentImageIndex]}
            className={`w-[265px] sm:w-[350px] h-[180px] sm:h-[200px] rounded-t-md`}
            width={350}
            height={350}
            alt={title}
          />
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="text-3xl font-extralight">{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className="tags" key={el}>
              {el}
            </div>
          ))}
        </div>
        <button
          className="text-blue-500 hover:underline"
          onClick={onReadMoreClick} 
        >
          Read More
        </button>
      </div>
    </div>
  );
};