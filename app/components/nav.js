import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';
const Nav = () => {
  //const worksRef = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    };

    const links = document.querySelectorAll('nav a');
    links.forEach((link) => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);
  return (
    <div>
      {' '}
      <div className='flex justify-between items-center p-4 sm:p-8'>
        <div className='flex'>
          <p className='text-[#f2f2f2] sm:inline hidden cursor-pointer text-2xl tracking-[7.03px]'>
            AYUSH KARIR
          </p>
          <p className='text-[#f2f2f2] sm:hidden cursor-pointer text-lg tracking-[4.03px] sm:tracking-[7.03px]'>
            AYUSH
          </p>
        </div>
        <Image
          src='/logo.png'
          width='60'
          height='60'
          className='justify-center '
        />
        <div className='flex justify-end sm:gap-10 gap-2'>
          <Link href='#works'>
            <div className='flex flex-row'>
              <p className='text-[#f2f2f2] nav-arrow-trigger sm:tracking-[5.03px] sm:text-2xl cursor-pointer'>
                WORKS
              </p>
              <Image
                src='/arrow-nav.svg'
                width='15'
                height='15'
                className='arrow-nav sm:inline hidden'
              />
            </div>
          </Link>
          <div className='flex flex-row'>
            <a target='_blank' href="https://drive.google.com/file/d/18D_vQJ5_jaxMqmRG1X5B-CzrJOqlfnS1/view?usp=drive_link" className='text-[#f2f2f2] nav-arrow-trigger  sm:tracking-[5.03px]  sm:text-2xl cursor-pointer'>
              RESUME
            </a>
            <Image
              src='/arrow-nav.svg'
              width='15'
              height='15'
              className='arrow-nav pl-[2px]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
