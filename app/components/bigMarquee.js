import React from 'react';

const BigMarquee = () => {
  return (
    <div>
      <div className='mt-10 hidden sm:inline'>
        <div className='flex  flex-nowrap overflow-hidden'>
          <div className='flex  -ml-24 flex-nowrap'>
            <p
              className='text-[260px] whitespace-nowrap text-[#f2f2f2] overflow-hidden  scroller'
              data-animated='true'
              data-direction='right'
            >
              Creating
            </p>
          </div>
        </div>
        <div className='flex overflow-hidden justify-end flex-nowrap'>
          <p
            data-animated='true'
            className='overflow-hidden whitespace-nowrap scroller2 text-[260px] text-[#f2f2f2] '
          >
            Digital Beauty
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigMarquee;
