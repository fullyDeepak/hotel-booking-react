import { format } from 'date-fns';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import HotelList from '../components/HotelList';
import Footer from '../components/Footer';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.previewOptions);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  // console.log(location);
  return (
    <>
      <NavBar />
      <Header type='list' />
      <div className='flex max-w-[1100px] m-auto mt-4 gap-x-4'>
        <div className='sticky flex flex-col flex-1 h-full p-4 rounded-lg top-2 gap-y-2 bg-amber-400'>
          <p className='text-2xl font-semibold'>Search</p>
          <label htmlFor='destination'>Destination</label>
          <input
            className='p-2 bg-white rounded-sm outline outline-1 focus:outline-2 outline-slate-600'
            type='text'
            id='destination'
            placeholder={destination}
          />
          <label htmlFor='check-in-date'>Check-in date</label>
          <span className='relative cursor-pointer'>
            <span
              onClick={() => setOpenDate(!openDate)}
              className='p-2 bg-white rounded-sm outline outline-1 focus:outline-2 outline-slate-600 whitespace-nowrap'>{`${format(
              date[0].startDate,
              'EE, MMM dd'
            )} — ${format(date[0].endDate, 'EE, MMM dd')}`}</span>
            {openDate && (
              <DateRange
                className='absolute scale-75 bg-white border-2 rounded-bl-lg rounded-br-lg -top-3 -left-16'
                ranges={date}
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
              />
            )}
          </span>
          <p>Options</p>
          <div className='flex flex-col ml-3 gap-y-2'>
            <div className='flex justify-between'>
              <label htmlFor='min-price'>Min price (per night)</label>
              <input
                className='p-1 rounded-sm w-[20%] bg-white outline outline-1 focus:outline-2 outline-slate-600'
                type='text'
                id='min-price'
              />
            </div>
            <div className='flex justify-between'>
              <label htmlFor='max-price'>Max price (per night)</label>
              <input
                className='p-1 rounded-sm w-[20%] bg-white outline outline-1 focus:outline-2 outline-slate-600'
                type='text'
                id='max-price'
              />
            </div>
            <div className='flex justify-between'>
              <label htmlFor='adult'>Adult</label>
              <input
                className='p-1 rounded-sm w-[20%] bg-white outline outline-1 focus:outline-2 outline-slate-600'
                type='number'
                min={1}
                id='adult'
                placeholder={options.adults}
              />
            </div>
            <div className='flex justify-between'>
              <label htmlFor='child'>Children</label>
              <input
                className='p-1 rounded-sm w-[20%] bg-white outline outline-1 focus:outline-2 outline-slate-600'
                type='number'
                min={0}
                id='child'
                placeholder={options.child}
              />
            </div>
            <div className='flex justify-between'>
              <label htmlFor='room'>Room</label>
              <input
                className='p-1 rounded-sm w-[20%] bg-white outline outline-1 focus:outline-2 outline-slate-600'
                type='number'
                min={1}
                id='room'
                placeholder={options.room}
              />
            </div>
          </div>
          <button className='bg-[#0266bb] rounded hover:brightness-125 text-white p-2 cursor-pointer'>
            Search
          </button>
        </div>
        <div className='flex-[4] flex flex-col gap-y-3'>
          <HotelList />
          <HotelList />
          <HotelList />
          <HotelList />
          <HotelList />
          <HotelList />
          <HotelList />
          <HotelList />
          <HotelList />
          <HotelList />
          <HotelList />
          <HotelList />
        </div>
      </div>
      <Footer className='mt-5' />
    </>
  );
};

export default List;
