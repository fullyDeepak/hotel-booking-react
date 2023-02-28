import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#00224f] text-white flex flex-col gap-5 items-center'>
      <div className='flex flex-col items-center text-2xl gap-1 font-thin w-[80%]'>
        <p>Save time, save money!</p>
        <p className='text-[16px] text-gray-300 font-normal'>
          Sign up and we'll send the best deals to you
        </p>
        <div className='flex w-[50%]'>
          <input
            className='p-2 w-[100%] mr-2 text-black rounded'
            type='text'
            placeholder='Your email address'
            name=''
            id=''
          />
          <button className='bg-[#0071c2] px-9 rounded py-2 flex-1'>
            Subscribe
          </button>
        </div>
      </div>
      <div className='bg-[#003580] w-[100%] flex flex-col gap-4 items-center pt-4 text-sm'>
        <a
          className='px-2 py-1 text-sm border rounded hover:brightness-150 bg-inherit'
          href='/'>
          List your property
        </a>
        <div className='flex justify-center underline py-5 gap-3 font-medium text-[13px] border-t w-[100%]'>
          <a href='/'>Mobile version</a>
          <a href='/'>Your account</a>
          <a href='/'>Make changes online to your booking</a>
          <a href='/'>Customer Service Help</a>
          <a href='/'>Become and affiliate</a>
          <a href='/'>Booking.com for Business</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
