import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import NextPrevButton from './NextPrevButton';
import carausel1 from '../assets/offers/carausel1.jpg';
import carausel2 from '../assets/offers/carausel2.jpg';
import carausel3 from '../assets/offers/carausel3.jpg';

const Offers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [offerSlider, offerSliderRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 380px)': {
        slides: { perView: 2, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 2, spacing: 10 },
      },
    },
    initial: 0,
    slides: {
      perView: 2,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className='flex flex-col items-center justify-center mt-52'>
      <h2 className='max-w-[1070px] w-[100%] text-2xl font-bold '>Offers</h2>
      <p className='max-w-[1070px] text-gray-600 w-[100%] my-2'>
        Promotions, deals, and special offers for you
      </p>
      <div className='max-w-[1070px] w-[100%] relative items-center flex justify-center'>
        <div className='flex w-[100%] justify-center navigation-wrapper'>
          <div ref={offerSlider} className='pb-2 keen-slider'>
            <div className='flex keen-slider__slide items-center justify-center shadow-[0_0_5px_1px_rgba(0,0,0,0.15)] m-1 w-[47%] grow-0 shrink-0 gap-4 p-4'>
              <div>
                <p className='font-bold'>Fly away to your dream vacation</p>
                <p className='mt-2 mb-2'>
                  Get inspired {'\u2013'} compare and book flights with
                  flexibility
                </p>
                <button className='bg-[#0071c2] rounded-[2px] px-3 py-2 text-white hover:bg-[#00487a]'>
                  Search for flights
                </button>
              </div>
              <div className='w-40'>
                <img src={carausel1} alt='' />
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${carausel2})` }}
              className='bg-cover keen-slider__slide text-white flex items-center justify-center w-[47%] grow-0 shrink-0 shadow-[0_0_5px_1px_rgba(0,0,0,0.15)] m-1 gap-4 p-4'>
              <div>
                <p className='font-bold'>Escape for a while</p>
                <p className='mt-2 mb-2'>
                  Enjoy the freedom of a monthly stay on Booking.com
                </p>
                <button className='bg-[#0071c2] rounded-[2px] px-3 py-2 text-white hover:bg-[#00487a]'>
                  Discoer monthly stays
                </button>
              </div>
              <div className='w-40'></div>
            </div>
            <div
              style={{ backgroundImage: `url(${carausel3})` }}
              className='bg-cover keen-slider__slide text-white flex items-center justify-center shadow-[0_0_5px_1px_rgba(0,0,0,0.15)] gap-4 p-4 w-[47%] m-1 grow-0 shrink-0'>
              <div>
                <p className='font-bold'>New year, new adventures</p>
                <p className='mt-2 mb-2'>
                  Save 15% or more when you book and stay before March 31, 2023
                </p>
                <button className='bg-[#0071c2] rounded-[2px] px-3 py-2 text-white hover:bg-[#00487a]'>
                  Find Early 2023 Deals
                </button>
              </div>
              <div className='w-40'></div>
            </div>
          </div>
        </div>
        {loaded && offerSliderRef.current && (
          <>
            <div
              className='absolute -left-4 top-[40%]'
              onClick={(e) =>
                e.stopPropagation() || offerSliderRef.current?.prev()
              }>
              <NextPrevButton disabled={currentSlide === 0} />
            </div>
            <div
              className='absolute -right-4 top-[38%]'
              onClick={(e) =>
                e.stopPropagation() ||
                (offerSliderRef.current?.next() && console.log('first'))
              }>
              <NextPrevButton
                next={true}
                disabled={
                  currentSlide ===
                  offerSliderRef.current.track.details.slides.length - 2
                }
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Offers;
