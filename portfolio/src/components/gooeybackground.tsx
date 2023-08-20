'use client'

import React, { useState, useEffect } from 'react';
import Goo from 'gooey-react';

const getRandomValue = (min: number, max: number) => Math.random() * (max - min) + min;
const getRandomColor = () => {
    const colors = ['rgba(	192, 233, 239)', 'rgba(208, 164, 255)','rgba(200, 199, 247)', 'rgba(196, 216, 243)', 'rgba(204, 181, 251)' ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const GooeyBackground = () => {
    const gradientColors = ['rgba(255, 196, 0, 0.9)', 'rgba(255, 153, 204, 0.9)'];
    const gradientDirection = 'to bottom right';
  
    const [numCircles, setNumCircles] = useState(15);
    const [svgWidth, setSvgWidth] = useState(window.innerWidth);
    const [svgHeight, setSvgHeight] = useState(window.innerHeight);
  
    useEffect(() => {
      const handleResize = () => {
        setSvgWidth(window.innerWidth);
        setSvgHeight(window.innerHeight);
  
        // Calculate the number of circles based on the viewport width
        const newNumCircles = Math.floor((window.innerWidth / 800) * 15);
        setNumCircles(newNumCircles);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const gradient = `linear-gradient(${gradientDirection}, ${gradientColors.join(', ')})`;
  
    const circles = [];
  
    for (let i = 0; i < numCircles; i++) {
      const cx = `${getRandomValue(10, 90)}%`;
      const cy = `${getRandomValue(10, 90)}%`;
      const r = getRandomValue(20, 60);
      const color = getRandomColor();
      const animationDuration = `${getRandomValue(8, 15)}s`;
  
      circles.push(
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill={color}
          style={{
            animation: `move-${i} ${animationDuration} linear infinite`,
          }}
        />
      );
    }
  
    return (
      <div
        style={{
          background: gradient,
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <Goo intensity="strong">
          <svg width={svgWidth} height={svgHeight}>
            <g>
              {circles}
              <defs>
                <style>
                  {circles.map(
                    (_, i) => `
                      @keyframes move-${i} {
                        0%, 100% {
                          transform: translate(${getRandomValue(-30, 30)}%, ${getRandomValue(-30, 30)}%);
                        }
                        50% {
                          transform: translate(${getRandomValue(-30, 30)}%, ${getRandomValue(-30, 30)}%) scale(1.2);
                        }
                      }
                    `
                  )}
                </style>
              </defs>
            </g>
          </svg>
        </Goo>
      </div>
    );
};
