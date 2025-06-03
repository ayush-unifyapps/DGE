'use client';
import React from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const Contact = () => {
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
      <div className='flex items-center sm:items-start mt-12 sm:px-20 sm:py-10'>
        <div ref={image}>
          <Image
            src='/contact.svg'
            className='w-[150px] sm:w-[300px] sm:-mr-24 sm:-mt-16 '
            width={300}
            height={300}
          />
        </div>
        <h1 className=' text-[#f2f2f2] text-[55px] sm:text-[100px] -ml-6 sm:-ml-20 z-10'>
          Connect
        </h1>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-2/3 '>
          <div className='flex'>
            <p className='text-3xl sm:text-6xl nav-arrow-trigger cursor-pointer text-[#ccc]  tracking-snug '>
              Github
            </p>
            <Image
              src='arrow-contact.svg'
              width={40}
              height={40}
              className='w-[20px] sm:w-[40px] ml-2 arrow-nav'
            />
          </div>
          <div className='flex'>
            <p className='text-3xl sm:text-6xl nav-arrow-trigger cursor-pointer text-[#ccc]  tracking-snug '>
              LinkedIn
            </p>
            <Image
              src='arrow-contact.svg'
              width={40}
              height={40}
              className='w-[20px] sm:w-[40px] ml-2 arrow-nav'
            />
          </div>
          <div className='flex'>
            <p className='text-3xl sm:text-6xl nav-arrow-trigger cursor-pointer text-[#ccc]  tracking-snug '>
              Leetcode
            </p>
            <Image
              src='arrow-contact.svg'
              width={40}
              height={40}
              className='w-[20px] sm:w-[40px] ml-2 arrow-nav'
            />
          </div>
          <div className='flex'>
            <p className='text-3xl sm:text-6xl nav-arrow-trigger cursor-pointer text-[#ccc]  tracking-snug '>
              X
            </p>
            <Image
              src='arrow-contact.svg'
              width={40}
              height={40}
              className='w-[20px] sm:w-[40px] ml-2 arrow-nav'
            />
          </div>
          <div className='flex flex-col sm:flex-row items-baseline justify-between'>
            <div className='flex'>
              <p className='text-3xl sm:text-6xl nav-arrow-trigger cursor-pointer text-[#ccc]  tracking-snug '>
                Gmail
              </p>
              <Image
                src='arrow-contact.svg'
                width={40}
                height={40}
                className='w-[20px] sm:w-[40px] ml-2 arrow-nav'
              />
            </div>
            <p className='text-[#ccc] mt-8 sm:mt-0 tracking-snug text-2xl sm:text-5xl'>
              (+91) 888 258 7419
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
