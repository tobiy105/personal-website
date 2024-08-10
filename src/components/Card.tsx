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
    <div className="border border-accent h-[400px] w-[265px] sm:w-[350px] rounded-md hover:shadow-2xl flex flex-col" data-aos="zoom-in-up">
      <div className="relative flex-shrink-0">
        <div
          style={{
            opacity: imageOpacity,
            transition: 'opacity 2s',
          }}
          className={`w-[265px] sm:w-[350px] h-[180px] sm:h-[200px] rounded-t-md`}
        >
          <Image
            src={imgs[currentImageIndex]}
            className={`w-[263px] sm:w-[348px] h-[180px] sm:h-[200px] rounded-t-md`}
            width={350}
            height={350}
            alt={title}
          />
        </div>
      </div>
      <div className="p-4 space-y-2 flex-grow overflow-hidden">
        <div className="text-2xl font-extralight text-center truncate">{title}</div>
        <div className="text-sm overflow-hidden text-ellipsis h-[64px] sm:h-[56px]">
          {desc}
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-0"> {/* Removed bottom margin */}
          {tags.slice(0, 3).map((el, index) => (  /* Show 3 tags on mobile */
            <div className="tags text-xs px-2 py-1 rounded-full" key={el}>
              {el}
            </div>
          ))}
          {tags.length > 3 && (
            <div className="hidden sm:inline-block tags text-xs px-2 py-1 rounded-full">
              {tags[3]}
            </div>
          )}
        </div>
      </div>
      <div className="text-center p-2"> {/* Kept padding minimal */}
        <button
          className="text-white hover:underline"
          onClick={onReadMoreClick} 
        >
          Read More
        </button>
      </div>
    </div>
  );
};
