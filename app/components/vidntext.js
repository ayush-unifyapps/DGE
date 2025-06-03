import React from 'react';
import { FlipWords } from './ui/flip-words';

// export function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }

const VidnText = () => {
  const words = ["EXPERIENCE", "PRODUCTS", "APPLICATIONS"];
  return (
    <div>
      {' '}
      <div className='flex justify-center w-full md:w-3/5 mt-16'>
        <div className=' flex justify-center items-center md:p-12 p-4'>
          <p className='text-[#f2f2f2] tracking-[3.03px] md:tracking-[5.03px] text-[22px] sm:text-2xl md:text-5xl '>
            BUILDING
            <FlipWords words={words} />
          </p>
          {/* <div id='flip'>
            <div>
              <div className='text-2xl sm:text-6xl'>EXPERIENCE</div>
            </div>
            <div>
              <div className='text-2xl sm:text-6xl'>PRODUCTS</div>
            </div>
            <div>
              <div className='text-2xl sm:text-6xl'>APPLICATIONS</div>
            </div>
          </div> */}
        </div>
      </div>
      <div className='bg-slate-500'>
        <video
          src={require('../../public/herovidTrim.mp4')}
          autoPlay
          muted
          loop
          className='herovid z-10'
        />
      </div>
    </div>
  );
};

export default VidnText;
