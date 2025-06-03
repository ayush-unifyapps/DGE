'use client';
import React, { useState } from 'react';
import Projects from './projects/projects';
import Modal from './modal';

const Works = () => {
  const projects = [
    {
      title: 'LiveCodeSpace',
      src: 'livecodespace.png',
      nopes: 'https://livecodespace.onrender.com',
      stack: 'React, Socket.io, NodeJS'
    },
    {
      title: 'Buzz',
      src: 'getbuzz.png',
      nopes: 'https://getbuzz.vercel.app',
      stack: 'Next.js, TypeScript, PostgreSQL, Webhooks, Supabase'
    },
    {
      title: 'Travela',
      src: 'travela.png',
      nopes:
        'https://www.figma.com/proto/aKXT2KthUeFIyZbXoL7e8L/Adobe-Project?page-id=0%3A1&node-id=3-1754&viewport=732%2C-3562%2C1.77&scaling=scale-down&starting-point-node-id=3%3A1754',
      stack: 'Figma, Prototyping'
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className='text-[#f2f2f2] overflow-hidden'>
      <h1 className='px-12 py-10 text-[#f2f2f2] text-[70px] sm:text-[100px] '>
        Works
      </h1>
      {projects.map((project, index) => {
        return (
          <Projects
            key={index}
            index={index}
            title={project.title}
            setModal={setModal}
            nopes={project.nopes}
            stack={project.stack}
          />
        );
      })}
      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default Works;
