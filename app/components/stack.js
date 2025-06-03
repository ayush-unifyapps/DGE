'use client';
import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import React from 'react';

const Stack = () => {
  const image = useRef(null);
  const speed = 0.05;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    gsap.set(image.current, {
      x: `+=${movementX * speed}`,
      y: `+=${movementY * speed}`,
    });
  };

  return (
    <div
      className='overflow-hidden h-[80vh]'
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
    >
      <div className='flex mt-32 sm:px-20 sm:py-10'>
        <div ref={image}>
          <Image
            src='/stack.svg'
            className='w-[200px] sm:w-[250px] -mr-20 z-10 relative sm:-mt-16  sm:ml-16'
            width={250}
            height={250}
          />
        </div>
        <div data-scroll data-scroll-speed='0.7'>
          <h1 className=' text-[#f2f2f2] hidden md:inline sm:text-[100px] relative ml-4 z-40'>
            Stack
          </h1>
          <h1 className=' text-[#f2f2f2] text-[70px] sm:hidden relative  z-40'>
            Stack
          </h1>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-5/6 '>
          <p className='text-2xl mt-4 sm:mt-0 sm:text-3xl text-[#ccc] tracking-wide leading-relaxed'>
            Next.Js, Typescript, React, Firebase, Redux, Prisma, PostgreSQL,
            Tailwind, GSAP, Framer-Motion, AWS, C++(DSA)
          </p>
          <p className='text-2xl sm:text-3xl  mt-4 text-[#ccc] tracking-wide leading-relaxed'>
            Github, Figma, Photoshop
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
