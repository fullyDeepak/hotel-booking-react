import { GiFlowerPot } from 'react-icons/gi';
import { BsWind } from 'react-icons/bs';
import { CiParking1 } from 'react-icons/ci';
import { Ri24HoursFill } from 'react-icons/ri';
import { GiKeyCard } from 'react-icons/gi';
import React, { useState } from 'react';
import { BiSwim, BiWifi } from 'react-icons/bi';
import { SlClose } from 'react-icons/sl';
import {
  FaBath,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaCity,
  FaParking,
} from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineCleaningServices } from 'react-icons/md';
import Footer from './Footer';

const HotelDetail = () => {
  const [showHideCarausel, setShowHideCarausel] = useState(false);
  const [clickedSlider, setClickedSlider] = useState(false);
  const [imgNumber, setImgNum] = useState(false);

  const imgArr = [
    '/images/hotel/1.jpg',
    '/images/hotel/2.jpg',
    '/images/hotel/3.jpg',
    '/images/hotel/4.jpg',
    '/images/hotel/5.jpg',
    '/images/hotel/6.jpg',
  ];

  const handleCarausel = (i) => {
    setShowHideCarausel(true);
    document.body.style.overflowY = 'hidden';
    setClickedSlider(imgArr[i]);
  };

  const nextprevButton = (value) => {
    let silderNumber;
    if (value === 'minus') {
      silderNumber = imgNumber === 0 ? 5 : imgNumber - 1;
    }
    if (value === 'plus') {
      silderNumber = imgNumber === 0 ? 5 : imgNumber - 1;
    }

    setClickedSlider(imgArr[silderNumber]);
    setImgNum(silderNumber);
  };

  return (
    <>
      <div className='max-w-[1070px] m-auto mt-6 w-full'>
        <div className='flex items-center justify-between '>
          <div className='flex flex-col gap-2'>
            <p className='text-2xl font-bold'>
              Radisson Blu Hotel New Delhi Paschim Vihar
            </p>
            <div className='flex items-center justify-center gap-1'>
              <IoLocationSharp />
              <span>
                Outer Ring Road, Paschim Vihar, Pashim Vihar, 110063 New Delhi,
                India
              </span>
            </div>
            <p className='font-semibold text-green-600'>
              Good Location - 1.22km from center
            </p>
            <p className='font-semibold text-green-600'>Free Taxi</p>
          </div>
          <button className='p-2 px-4 text-white bg-sky-700 hover:bg-sky-900'>
            Reserve
          </button>
        </div>
        {showHideCarausel && (
          <>
            <div className='absolute top-0 left-0 z-10 flex justify-center w-full h-full p-10 bg-black/70 '>
              <div className='flex items-center justify-between gap-4'>
                <FaChevronCircleLeft
                  onClick={() => nextprevButton('minus')}
                  className='absolute cursor-pointer flex-1 text-gray-200 rounded-full left-10 z-100 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.3)]'
                  size={50}
                />
                <img
                  className='flex-[4] shrink-0 rounded-2xl h-[80vh]'
                  src={clickedSlider}
                  alt=''
                />

                <SlClose
                  onClick={() => {
                    setShowHideCarausel(false);
                    document.body.style.overflowY = 'auto';
                  }}
                  size={50}
                  className='absolute text-gray-200 rounded-full cursor-pointer top-7 right-7 hover:bg-white/30 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.3)]'
                />

                <FaChevronCircleRight
                  onClick={() => nextprevButton('plus')}
                  size={50}
                  className='absolute cursor-pointer flex-1 text-gray-200 rounded-full right-10 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.3)]'
                />
              </div>
            </div>
          </>
        )}
        <div className='grid grid-cols-3 gap-3 mt-6'>
          {imgArr.map((e, i) => (
            <img
              className='object-cover w-full h-full rounded-md cursor-pointer'
              src={e}
              key={i}
              onClick={() => {
                handleCarausel(i);
                setImgNum(i);
              }}
              alt=''
            />
          ))}
        </div>
        <div className='flex flex-wrap gap-2 mt-10 text-sm'>
          <div className='flex items-center flex-grow justify-center gap-2 border min-w-[12%] p-3 '>
            <FaCity size={30} color={'dimgray'} />
            <span>City View</span>
          </div>
          <div className='flex items-center flex-grow justify-center gap-2 border min-w-[12%] p-3 '>
            <GiFlowerPot size={30} color={'dimgray'} />
            <span>Garden</span>
          </div>
          <div className='flex items-center flex-grow justify-center gap-2 border min-w-[12%] p-3 '>
            <BiSwim size={30} color={'dimgray'} />
            <span>Swimming Pool</span>
          </div>
          <div className='flex items-center flex-grow justify-center gap-2 border min-w-[12%] p-3 '>
            <BiWifi size={30} color={'dimgray'} />
            <span>Free WiFi</span>
          </div>
          <div className='flex items-center flex-grow justify-center gap-2 border min-w-[12%] p-3 '>
            <FaParking size={30} color={'dimgray'} />
            <span>Free Parking</span>
          </div>
          <div className='flex items-center flex-grow justify-center gap-2 border min-w-[12%] p-3 '>
            <FaBath size={30} color={'dimgray'} />
            <span>Bathtub</span>
          </div>
          <div className='flex items-center flex-grow justify-center gap-2 border min-w-[12%] p-3 '>
            <BsWind size={30} color={'dimgray'} />
            <span>Air conditioning</span>
          </div>
          <div className='flex items-center flex-grow justify-center gap-2 border min-w-[12%] p-3 '>
            <Ri24HoursFill size={30} color={'dimgray'} />
            <span>24-hour front desk</span>
          </div>
          <div className='flex items-center flex-grow justify-center gap-2 border min-w-[12%] p-3 '>
            <GiKeyCard size={30} color={'dimgray'} />
            <span>Key card access</span>
          </div>
          <div className='flex items-center flex-grow justify-center gap-2 border min-w-[12%] p-3 '>
            <MdOutlineCleaningServices size={30} color={'dimgray'} />
            <span>Daily housekeeping</span>
          </div>
        </div>
        <div className='flex items-start gap-16 my-10 text-sm'>
          <div className='flex flex-[3] flex-col gap-2'>
            <span>
              Located in Paschim Vihar, West Delhi, this hotel features a
              24-hour business center, an outdoor swimming pool, and 4 dining
              options. Free Wi-Fi is available and complimentary private parking
              is provided.
            </span>
            <span>
              Offering contemporary décor, air-conditioned rooms feature a
              flat-screen TV, seating area. Private bathrooms come with shower
              facilities and free toiletries. Room service is provided.
            </span>
            <span>
              The hotel operates a 24-hour front desk and features a wide range
              of facilities which includes a fitness center, a spa,
              meeting/banqueting facilities and a hair/beauty salon. Car
              rentals, tours and ticketing services are also provided.
            </span>
            <span>
              The Tea Lounge serves light beverages and desserts, while Indyaki
              offers Indian food cooked on Teppanyaki grills. Alternatively, the
              lounge bar, Oro, offers tapas and an international range of wines
              and spirits. There is also a pastry shop selling freshly baked
              sweets and savory delights.
            </span>
            <span>
              Radisson Blu Hotel is located 4 mi away from The Delhi Haat and 11
              mi from Chandni Chowk. The Lotus Temple and the famous India Gate
              is within a 45-minute drive away. Indira Gandhi International
              Airport is approximately a 30-minute drive from the hotel.
            </span>
            <span>
              <span className='font-semibold'>
                Radisson Blu Hotel New Delhi Paschim Vihar has been welcoming
                Booking.com guests since Aug 16, 2012
              </span>{' '}
              Hotel chain/brand: Radisson Blu , Radisson Hotels
            </span>
          </div>
          <div className='flex flex-col flex-1 gap-3 p-5 bg-blue-100 rounded'>
            <p className='text-lg font-semibold'>Property Highlights</p>
            <p className='text-[13px] font-semibold'>Breakfast Info</p>
            <p className='text-sm leading-5'>
              Continental, Vegetarian, Vegan, Halal, Gluten-free, Asian,
              American, Buffet
            </p>
            <div className='flex gap-1'>
              <CiParking1 size={30} />
              <span>Free private parking available at hotel</span>
            </div>
            <button className='p-2 font-semibold text-white rounded-sm bg-sky-700 hover:bg-sky-900'>
              Reserve
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HotelDetail;
