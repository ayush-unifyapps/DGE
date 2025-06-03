'use client';
import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

export default function index({ index, title, setModal, nopes, stack }) {
  return (
    <div>
      <a href={nopes} target='_blank'>
        <div
          onMouseEnter={() => {
            setModal({ active: true, index });
          }}
          onMouseLeave={() => {
            setModal({ active: false, index });
          }}
          className={`${styles.project} flex justify-around px-[10px] sm:px-[50px] py-[100px]`}
        >
          <h2 className='text-2xl sm:text-[50px]'>{title}</h2>
          <p>{stack}</p>
        </div>
      </a>
    </div>
  );
}
