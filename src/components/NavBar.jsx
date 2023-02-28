import React from 'react';

const NavBar = () => {
  return (
    <>
      <div className='bg-[#003580] h-14 flex justify-center items-center '>
        <div className='w-[100%] max-w-[1070px] text-white font-semibold flex justify-between'>
          <span className='font-sans text-2xl'>Booking.com</span>
          <div>
            <span className='mr-4 font-sans'>List your property</span>
            <button className='font-sans ml-1 mr-1 p-2 hover:bg-slate-200 rounded-[1px] bg-white text-blue-700'>
              Register
            </button>
            <button className='font-sans ml-1 mr-1 p-2 hover:bg-slate-200 rounded-[1px] bg-white text-blue-700'>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
