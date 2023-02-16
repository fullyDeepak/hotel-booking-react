import React, { useState } from 'react';
import { FaPlaneDeparture, FaMapMarkedAlt, FaCar } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdOutlineAttractions, MdOutlineLocalTaxi } from 'react-icons/md';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // css file for date picker
import 'react-date-range/dist/theme/default.css'; // theme css file for date picker
import { format } from 'date-fns';

const Header = (props) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [showOptionPicker, setShowOptionPicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  // const [chooseOption, setChooseOption] = useState(false);
  const [previewOptions, setPreviewOptions] = useState({
    adults: 2,
    child: 0,
    room: 1,
  });

  return (
    <div className='bg-[#003580]'>
      <div className='flex justify-center text-white'>
        <div className='w-[100%] max-w-[1048px] mt-2 mb-3 flex overflow-x-auto'>
          <div className='hover:bg-[#19498c] rounded-full px-3 py-2 cursor-pointer flex items-center gap-1 border border-transparent active:border-white whitespace-nowrap'>
            <BiBed />
            Stays
          </div>
          <div className='hover:bg-[#19498c] rounded-full px-3 py-2 cursor-pointer flex items-center gap-1  border border-transparent active:border-white whitespace-nowrap'>
            <FaPlaneDeparture />
            Flights
          </div>
          <div className='hover:bg-[#19498c] rounded-full px-3 py-2 cursor-pointer flex whitespace-nowrap items-center gap-1  border border-transparent active:border-white'>
            <FaMapMarkedAlt />
            Flight + Hotel
          </div>
          <div className='hover:bg-[#19498c] rounded-full px-3 py-2 cursor-pointer flex items-center gap-1  border border-transparent active:border-white whitespace-nowrap'>
            <FaCar />
            Car rentals
          </div>
          <div className='hover:bg-[#19498c] rounded-full px-3 py-2 cursor-pointer flex items-center gap-1  border border-transparent active:border-white whitespace-nowrap'>
            <MdOutlineAttractions />
            Attaraction
          </div>
          <div className='hover:bg-[#19498c] rounded-full px-3 py-2 cursor-pointer flex items-center gap-1  border border-transparent active:border-white whitespace-nowrap'>
            <MdOutlineLocalTaxi />
            Airport taxis
          </div>
        </div>
      </div>
      {props.type !== 'list' && (
        <>
          <div className='mt-10 text-white flex flex-col items-center min-h-[140px]'>
            <h1 className='text-5xl font-bold w-[100%] max-w-5xl'>
              Find your next stay
            </h1>
            <h2 className='text-2xl mt-2 w-[100%] max-w-5xl'>
              Search deals on hotels, homes, and much more...
            </h2>
          </div>

          <div className='relative flex justify-center -bottom-8 '>
            <div className='shadow-[0_0px_8px_0px_rgba(0,0,0,0.3)] h-16 px-1 w-[100%] max-w-5xl flex justify-between items-center rounded-[2px] bg-[#febb02] z-10 gap-1  text-black font-medium text-sm'>
              <div className='bg-white w-[100%] border-white border-2 hover:border-[#ff8800] hover:border-2 flex  items-center rounded-[2px] pl-2 gap-2'>
                <BiBed className='text-2xl text-gray-400' />
                <input
                  className='outline-none pr-2 w-80 rounded h-[53px] placeholder:text-gray-600 focus:placeholder:text-gray-400'
                  placeholder='Where are you going?'
                />
              </div>
              <div
                className='flex bg-white w-[100%] border-white border-2 hover:border-[#ff8800] hover:border-2 h-14 rounded-[2px] px-3 cursor-pointer items-center gap-2'
                onClick={() => setShowDatePicker(!showDatePicker)}>
                <FaRegCalendarAlt className='text-xl text-gray-400' />
                <span>{`${format(date[0].startDate, 'EE, MMM dd')} — ${format(
                  date[0].endDate,
                  'EE, MMM dd'
                )}`}</span>
                {showDatePicker && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='absolute top-16'
                  />
                )}
              </div>
              <div className='relative '>
                <div
                  className='flex cursor-pointer  bg-white w-[100%] border-white border-2 hover:border-[#ff8800] hover:border-2 h-14 px-3 rounded-[2px] items-center gap-2'
                  onClick={() => setShowOptionPicker(!showOptionPicker)}>
                  <AiOutlineUser className='text-2xl text-gray-400 ' />
                  <span className='whitespace-nowrap'>{`${previewOptions.adults} adults · ${previewOptions.child} children · ${previewOptions.room} room`}</span>
                </div>
                {showOptionPicker && (
                  <div className='shadow-[0_0px_8px_0px_rgba(0,0,0,0.3)] absolute top-[72px] right-0 rounded select-none'>
                    <div className='flex flex-col p-8'>
                      <div className='flex items-center justify-between mb-2'>
                        <span className=' mr-28'>Adults</span>
                        <span className='flex items-center justify-center border-2 border-gray-300 rounded'>
                          <button
                            className='hover:bg-[#f0f7fb] flex justify-center items-center mr-5 h-10 w-10 cursor-pointer disabled:cursor-not-allowed'
                            disabled={previewOptions.adults <= 1}
                            onClick={() =>
                              setPreviewOptions({
                                ...previewOptions,
                                adults: previewOptions.adults - 1,
                              })
                            }>
                            <HiOutlineMinus />
                          </button>
                          <span className='min-w-[15px]'>
                            {previewOptions.adults}
                          </span>
                          <button
                            className='hover:bg-[#f0f7fb] flex justify-center items-center ml-5 h-10 w-10 cursor-pointer disabled:cursor-not-allowed'
                            disabled={previewOptions.adults >= 30}
                            onClick={() =>
                              setPreviewOptions({
                                ...previewOptions,
                                adults: previewOptions.adults + 1,
                              })
                            }>
                            <HiOutlinePlus />
                          </button>
                        </span>
                      </div>
                      <div className='flex items-center justify-between mb-2'>
                        <span className=' mr-28'>Children</span>
                        <span className='flex items-center justify-center border-2 border-gray-300 rounded'>
                          <button
                            className='hover:bg-[#f0f7fb] flex justify-center items-center mr-5 h-10 w-10 cursor-pointer disabled:cursor-not-allowed'
                            disabled={previewOptions.child <= 1}
                            onClick={() =>
                              setPreviewOptions({
                                ...previewOptions,
                                child: previewOptions - 1,
                              })
                            }>
                            <HiOutlineMinus />
                          </button>
                          <span className='min-w-[15px]'>
                            {previewOptions.child}
                          </span>
                          <button
                            className='hover:bg-[#f0f7fb] flex justify-center items-center ml-5 h-10 w-10 cursor-pointer disabled:cursor-not-allowed'
                            disabled={previewOptions.child >= 10}
                            onClick={() =>
                              setPreviewOptions({
                                ...previewOptions,
                                child: previewOptions.child + 1,
                              })
                            }>
                            <HiOutlinePlus />
                          </button>
                        </span>
                      </div>
                      <div className='flex items-center justify-between mb-2'>
                        <span className=' mr-28'>Room</span>
                        <span className='flex items-center justify-center border-2 border-gray-300 rounded'>
                          <button
                            className='hover:bg-[#f0f7fb] flex justify-center items-center mr-5 h-10 w-10 cursor-pointer disabled:cursor-not-allowed'
                            disabled={previewOptions.adults <= 1}
                            onClick={() =>
                              setPreviewOptions({
                                ...previewOptions,
                                room: previewOptions.room - 1,
                              })
                            }>
                            <HiOutlineMinus />
                          </button>
                          <span className='min-w-[15px]'>
                            {previewOptions.room}
                          </span>
                          <button
                            className='hover:bg-[#f0f7fb] flex justify-center items-center ml-5 h-10 w-10 cursor-pointer disabled:cursor-not-allowed'
                            disabled={previewOptions.room >= 30}
                            onClick={() =>
                              setPreviewOptions({
                                ...previewOptions,
                                room: previewOptions.room + 1,
                              })
                            }>
                            <HiOutlinePlus />
                          </button>
                        </span>
                      </div>
                      <button
                        className='mt-5 rounded-sm border border-[#0071c2] hover:bg-[#f0f7fb] text-[#0071c2] h-9'
                        onClick={() => setShowOptionPicker(false)}>
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button className='bg-[#0071c2] rounded-[2px] px-8 py-[14px] text-xl text-white hover:bg-[#00487a]'>
              Search
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
