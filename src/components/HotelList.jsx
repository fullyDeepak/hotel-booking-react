import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const SearchItem = () => {
  return (
    <div className='flex p-2 border-2 hover:border-transparent rounded hover:shadow-[0_0_4px_2px_rgba(0,0,0,0.2)] gap-x-5'>
      <div className='self-center flex-1'>
        <img src='images/homeguest/london.webp' alt='' />
      </div>
      <div className='flex text-sm flex-[3] gap-x-4 justify-between'>
        <div className='flex flex-col justify-between gap-y-1'>
          <p className='text-[#19639e] text-xl font-bold'>
            Radisson Blu Hotel New Delhi Paschim Vihar
          </p>
          <p>13.3km form center</p>
          <span className='px-[5px] rounded-sm self-baseline text-white bg-green-700'>
            Free pickup
          </span>
          <p className='font-bold'>Delux Double or Twin Room</p>
          <p>
            Entire studio {'\u00B7'} 1 bathroom {'\u00B7'} 21m<sup>2</sup> 1
            full bed{' '}
          </p>
          <p className='font-semibold text-green-600'>
            No cancellation charges
          </p>
          <p className='text-green-600'>
            You can cancel later, so lock in this great price today!
          </p>
        </div>
        <div className='flex flex-col justify-between'>
          <div className='flex justify-between'>
            <p className='font-semibold'>Excellent</p>
            <a
              href='/'
              className='bg-[#003580] rounded rounded-bl-none p-1 text-white'>
              9.1
            </a>
          </div>
          <div className='flex flex-col'>
            <p className='self-end text-2xl font-semibold'>{'\u20b9'}150</p>
            <p className='self-end text-gray-500 whitespace-nowrap'>
              includes taxes and fees
            </p>
            <a
              href='/hotels/xyz'
              className='px-6 py-3 text-xs font-semibold text-center text-white rounded-sm whitespace-nowrap bg-sky-800 hover:bg-sky-900'>
              <span className='flex items-center justify-center gap-x-2'>
                See availability <FaChevronRight size={12} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
