'use client';
import Image from 'next/image';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Nav from './components/nav';
import VidnText from './components/vidntext';
import RevealText from './components/revealText';
import Works from './components/works/works';
import gsap from 'gsap';
import Stack from './components/stack';
import Contact from './components/contact';
import BigMarquee from './components/bigMarquee';

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";




// import Video from 'next-video';
// import videoLoop from '/videos/herovid.mp4';

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];

  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  }, []);
  const worksRef = useRef(null);
  return (
    <div>
      <Nav />
      <VidnText />
      <RevealText />

      <section ref={worksRef} id='works'>
        <Works />
      </section>

      <BigMarquee />
      <Stack />
      <Contact />

      {/* <video
        src={videoLoop}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className='hero-vid'
      ></video> */}
    </div>
  );
}
