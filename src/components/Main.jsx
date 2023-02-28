import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import NextPrevButton from '../components/NextPrevButton';

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [propertyTypeSlider, propertyTypeSliderRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 380px)': {
        slides: { perView: 2, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 4, spacing: 10 },
      },
    },
    initial: 0,
    slides: {
      perView: 4,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const [exploreIndiaSlider, exploreIndiaSliderRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 380px)': {
        slides: { perView: 2, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 6, spacing: 10 },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const [homesGuestLoveSlider, homeGuestLoveSliderRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 380px)': {
        slides: { perView: 2, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 4, spacing: 10 },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className='flex items-center justify-center mt-8'>
      <div className='max-w-[1070px] w-[100%]  flex flex-col justify-center'>
        <h2 className='mb-4 text-2xl font-bold '>Browse by property type</h2>
        <div className='flex w-[100%] relative justify-center navigation-wrapper'>
          <div ref={propertyTypeSlider} className='keen-slider '>
            <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
              <img src='images/property/hotels.jpeg' alt='' />
              <span className='my-1 font-bold'>Hotels</span>
              <span className='text-sm text-gray-500'>941,996 hotels</span>
            </div>
            <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
              <img src='images/property/apartments.jpeg' alt='' />
              <span className='my-1 font-bold'>Apartments</span>
              <span className='text-sm text-gray-500'>975,611 hotels</span>
            </div>
            <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
              <img src='images/property/Resorts.jpeg' alt='' />
              <span className='my-1 font-bold'>Resorts</span>
              <span className='text-sm text-gray-500'>18,877 hotels</span>
            </div>
            <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
              <img src='images/property/Villas.jpeg' alt='' />
              <span className='my-1 font-bold'>Villas</span>
              <span className='text-sm text-gray-500'>527,116 hotels</span>
            </div>
            <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
              <img src='images/property/Cabins.jpeg' alt='' />
              <span className='my-1 font-bold'>Cabins</span>
              <span className='text-sm text-gray-500'>40,044 hotels</span>
            </div>
            <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
              <img src='images/property/Cottages.jpeg' alt='' />
              <span className='my-1 font-bold'>Cottages</span>
              <span className='text-sm text-gray-500'>576,202 hotels</span>
            </div>
            <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
              <img src='images/property/Glamping.jpeg' alt='' />
              <span className='my-1 font-bold'>Glamping</span>
              <span className='text-sm text-gray-500'>13,965 hotels</span>
            </div>
            <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
              <img src='images/property/Service-Apartments.jpeg' alt='' />
              <span className='my-1 font-bold'>Serviced Apartments</span>
              <span className='text-sm text-gray-500'>36,334 hotels</span>
            </div>
            <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
              <img src='images/property/vacation-homes.jpeg' alt='' />
              <span className='my-1 font-bold'>Vacation Homes</span>
              <span className='text-sm text-gray-500'>527,116 hotels</span>
            </div>
            <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
              <img src='images/property/guest-houses.jpeg' alt='' />
              <span className='my-1 font-bold'>Guest houses</span>
              <span className='text-sm text-gray-500'>102,166 hotels</span>
            </div>
            <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
              <img src='images/property/Hostels.jpeg' alt='' />
              <span className='my-1 font-bold'>Hostels</span>
              <span className='text-sm text-gray-500'>17,255 hotels</span>
            </div>
            <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
              <img src='images/property/Motels.jpeg' alt='' />
              <span className='my-1 font-bold'>Motels</span>
              <span className='text-sm text-gray-500'>13,103 hotels</span>
            </div>
          </div>
          {loaded && propertyTypeSliderRef.current && (
            <>
              <div
                className='absolute -left-4 top-[34%]'
                onClick={(e) =>
                  e.stopPropagation() || propertyTypeSliderRef.current?.prev()
                }>
                <NextPrevButton disabled={currentSlide === 0} />
              </div>
              <div
                className='absolute -right-4 top-[34%]'
                onClick={(e) =>
                  e.stopPropagation() ||
                  (propertyTypeSliderRef.current?.next() &&
                    console.log('first'))
                }>
                <NextPrevButton
                  next={true}
                  disabled={
                    currentSlide ===
                    propertyTypeSliderRef.current.track.details.slides.length -
                      propertyTypeSliderRef.current.options.slides.perView
                  }
                />
              </div>
            </>
          )}
        </div>
        <div className='mt-8'>
          <h2 className='text-2xl font-bold '>Explore India</h2>
          <p className='my-2 text-gray-600'>
            These popular destinations have a lot to offer
          </p>
          <div className='flex w-[100%] relative justify-center navigation-wrapper'>
            <div ref={exploreIndiaSlider} className='keen-slider '>
              <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
                <img src='images/india/goa.jpg' alt='' />
                <p className='font-bold'>Goa</p>
                <p className='text-sm text-gray-500'>5,243 Properties</p>
              </div>
              <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
                <img src='images/india/newdelhi.jpg' alt='' />
                <p className='font-bold'>New Delhi</p>
                <p className='text-sm text-gray-500'>2,914 Properties</p>
              </div>
              <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
                <img src='images/india/mumbai.jpg' alt='' />
                <p className='font-bold'>Mumbai</p>
                <p className='text-sm text-gray-500'>1,650 Properties</p>
              </div>
              <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
                <img src='images/india/north-goa.jpg' alt='' />
                <p className='font-bold'>North Goa</p>
                <p className='text-sm text-gray-500'>3,902 Properties</p>
              </div>
              <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
                <img src='images/india/jaipur.jpg' alt='' />
                <p className='font-bold'>Jaipur</p>
                <p className='text-sm text-gray-500'>1,559 Properties</p>
              </div>
              <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
                <img src='images/india/bangalore.jpg' alt='' />
                <p className='font-bold'>Bangalore</p>
                <p className='text-sm text-gray-500'>2,041 Properties</p>
              </div>
              <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
                <img src='images/india/hyderabad.jpg' alt='' />
                <p className='font-bold'>Hyderabad</p>
                <p className='text-sm text-gray-500'>796 Properties</p>
              </div>
              <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
                <img src='images/india/pondichery.jpg' alt='' />
                <p className='font-bold'>Pondichery</p>
                <p className='text-sm text-gray-500'>1,137 Properties</p>
              </div>
              <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
                <img src='images/india/udaipur.jpg' alt='' />
                <p className='font-bold'>Udaipur</p>
                <p className='text-sm text-gray-500'>816 Properties</p>
              </div>
              <div className='flex flex-col flex-grow-0 keen-slider__slide shrink-0'>
                <img src='images/india/south-goa.jpg' alt='' />
                <p className='font-bold'>South Goa</p>
                <p className='text-sm text-gray-500'>1,372 Properties</p>
              </div>
            </div>
            {loaded && propertyTypeSliderRef.current && (
              <>
                <div
                  className='absolute -left-4 top-[34%]'
                  onClick={(e) =>
                    e.stopPropagation() || propertyTypeSliderRef.current?.prev()
                  }>
                  <NextPrevButton disabled={currentSlide === 0} />
                </div>
                <div
                  className='absolute -right-4 top-[34%]'
                  onClick={(e) =>
                    e.stopPropagation() ||
                    (exploreIndiaSliderRef.current?.next() &&
                      console.log('first'))
                  }>
                  <NextPrevButton
                    next={true}
                    disabled={
                      currentSlide ===
                      exploreIndiaSliderRef.current.track.details.slides
                        .length -
                        exploreIndiaSliderRef.current.options.slides.perView
                    }
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-8 '>
          <div className='flex gap-4'>
            <div className='relative flex max-h-96 w-[50%]'>
              <img
                className='object-cover w-[100%]'
                src='images/india/new-delhi-xl.jpg'
                alt=''
              />
              <p className='absolute top-4 left-4 text-2xl font-bold text-white drop-shadow-[1px_1px_0.2px_rgba(0,0,0,10)]'>
                New Delhi 🇮🇳
              </p>
            </div>
            <div className='relative max-h-96 flex w-[50%] '>
              <img
                className='object-cover w-[100%]'
                src='images/india/bangalore-xl.jpg'
                alt=''
              />
              <p className='absolute top-4 left-4 text-2xl font-bold text-white drop-shadow-[1px_1px_0.2px_rgba(0,0,0,10)]'>
                Bangalore 🇮🇳
              </p>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='relative flex w-[33%] h-60'>
              <img
                className='object-cover w-[100%]'
                src='images/india/mumbai-xl.jpg'
                alt=''
              />
              <p className='absolute top-4 left-4 text-2xl font-bold text-white drop-shadow-[1px_1px_0.2px_rgba(0,0,0,10)]'>
                Mumbai 🇮🇳
              </p>
            </div>
            <div className='relative flex w-[33%] h-60'>
              <img
                className='object-cover w-[100%]'
                src='images/india/chennai-xl.jpg'
                alt=''
              />
              <p className='absolute top-4 left-4 text-2xl font-bold text-white drop-shadow-[1px_1px_0.2px_rgba(0,0,0,10)]'>
                Chennai 🇮🇳
              </p>
            </div>
            <div className='relative flex w-[33%] h-60'>
              <img
                className='object-cover w-[100%]'
                src='images/india/jaipur-xl.jpg'
                alt=''
              />
              <p className='absolute top-4 left-4 text-2xl font-bold text-white drop-shadow-[1px_1px_0.2px_rgba(0,0,0,10)]'>
                Jaipur 🇮🇳
              </p>
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <h2 className='text-2xl font-bold '>Homes guests love</h2>
          <div className=' mt-3 flex w-[100%] relative justify-center navigation-wrapper'>
            <div ref={homesGuestLoveSlider} className='keen-slider'>
              <div className='flex flex-col flex-grow-0 gap-y-1 keen-slider__slide shrink-0'>
                <img src='images/homeguest/prague.webp' alt='' />
                <p className='font-bold'>
                  6 Continents Apartments by Prague Residences
                </p>
                <p className='text-sm text-gray-500'>
                  Prague 1, Czech Republic, Prague
                </p>
                <p className='text-sm text-gray-500'>
                  Starting from{' '}
                  <span className='text-base font-bold text-black'>
                    ₹ 5,077
                  </span>
                </p>
                <div className='flex text-[12px] items-center gap-x-2'>
                  <a
                    href='/'
                    className='bg-[#003580] rounded rounded-bl-none p-1 text-white'>
                    8.3
                  </a>
                  <p className='text-gray-600'>
                    Very Good {'\u00B7'} 248 reviews
                  </p>
                </div>
              </div>
              <div className='flex flex-col flex-grow-0 gap-y-1 keen-slider__slide shrink-0'>
                <img src='images/homeguest/croatia.webp' alt='' />
                <p className='font-bold'>Villa Domina</p>
                <p className='text-sm text-gray-500'>
                  Split City Center, Croatia, Split
                </p>
                <p className='text-sm text-gray-500'>
                  Starting from{' '}
                  <span className='text-base font-bold text-black'>
                    ₹ 3,952
                  </span>
                </p>
                <div className='flex text-[12px] items-center gap-x-2'>
                  <a
                    href='/'
                    className='bg-[#003580] rounded rounded-bl-none p-1 text-white'>
                    9.4
                  </a>
                  <p className='text-gray-600'>
                    Wonderful {'\u00B7'} 1,048 reviews
                  </p>
                </div>
              </div>
              <div className='flex flex-col flex-grow-0 gap-y-1 keen-slider__slide shrink-0'>
                <img src='images/homeguest/budapest.webp' alt='' />
                <p className='font-bold'>7Seasons Apartments Budapest</p>
                <p className='text-sm text-gray-500'>
                  06. Terezvaros, Hungary, Budapest
                </p>
                <p className='text-sm text-gray-500'>
                  Starting from{' '}
                  <span className='text-base font-bold text-black'>
                    ₹ 7,518
                  </span>
                </p>
                <div className='flex text-[12px] items-center gap-x-2'>
                  <a
                    href='/'
                    className='bg-[#003580] rounded rounded-bl-none p-1 text-white'>
                    8.8
                  </a>
                  <p className='text-gray-600'>
                    Excellent {'\u00B7'} 7,261 reviews
                  </p>
                </div>
              </div>
              <div className='flex flex-col flex-grow-0 gap-y-1 keen-slider__slide shrink-0'>
                <img src='images/homeguest/madrid.webp' alt='' />
                <p className='font-bold'>Oriente Palace Apartments</p>
                <p className='text-sm text-gray-500'>
                  Madrid City Center, Spain, Madrid
                </p>
                <p className='text-sm text-gray-500'>
                  Starting from{' '}
                  <span className='text-base font-bold text-black'>
                    ₹ 10,144
                  </span>
                </p>
                <div className='flex text-[12px] items-center gap-x-2'>
                  <a
                    href='/'
                    className='bg-[#003580] rounded rounded-bl-none p-1 text-white'>
                    8.9
                  </a>
                  <p className='text-gray-600'>
                    Excellent {'\u00B7'} 2,557 reviews
                  </p>
                </div>
              </div>
              <div className='flex flex-col flex-grow-0 gap-y-1 keen-slider__slide shrink-0'>
                <img src='images/homeguest/poland.webp' alt='' />
                <p className='font-bold'>Aparthotel Stare Miasto</p>
                <p className='text-sm text-gray-500'>
                  Old Town, Poland, Krakow
                </p>
                <p className='text-sm text-gray-500'>
                  Starting from{' '}
                  <span className='text-base font-bold text-black'>
                    ₹ 7,304
                  </span>
                </p>
                <div className='flex text-[12px] items-center gap-x-2'>
                  <a
                    href='/'
                    className='bg-[#003580] rounded rounded-bl-none p-1 text-white'>
                    8.7
                  </a>
                  <p className='text-gray-600'>
                    Excellent {'\u00B7'} 2,103 reviews
                  </p>
                </div>
              </div>
              <div className='flex flex-col flex-grow-0 gap-y-1 keen-slider__slide shrink-0'>
                <img src='images/homeguest/praha.webp' alt='' />
                <p className='font-bold'>
                  3 Epoques Apartments by Prague Residences
                </p>
                <p className='text-sm text-gray-500'>
                  Prague 1, Czech Republic, Praha 1
                </p>
                <p className='text-sm text-gray-500'>
                  Starting from{' '}
                  <span className='text-base font-bold text-black'>
                    ₹ 5,712
                  </span>
                </p>
                <div className='flex text-[12px] items-center gap-x-2'>
                  <a
                    href='/'
                    className='bg-[#003580] rounded rounded-bl-none p-1 text-white'>
                    8.7
                  </a>
                  <p className='text-gray-600'>
                    Excellent {'\u00B7'} 404 reviews
                  </p>
                </div>
              </div>
              <div className='flex flex-col flex-grow-0 gap-y-1 keen-slider__slide shrink-0'>
                <img src='images/homeguest/krakow.webp' alt='' />
                <p className='font-bold'>P&J Luxuary Apartment</p>
                <p className='text-sm text-gray-500'>
                  Old Town, Poland, Krakow
                </p>
                <p className='text-sm text-gray-500'>
                  Starting from{' '}
                  <span className='text-base font-bold text-black'>
                    ₹ 5,450
                  </span>
                </p>
                <div className='flex text-[12px] items-center gap-x-2'>
                  <a
                    href='/'
                    className='bg-[#003580] rounded rounded-bl-none p-1 text-white'>
                    8.4
                  </a>
                  <p className='text-gray-600'>
                    Very Good {'\u00B7'} 282 reviews
                  </p>
                </div>
              </div>
              <div className='flex flex-col flex-grow-0 gap-y-1 keen-slider__slide shrink-0'>
                <img src='images/homeguest/london.webp' alt='' />
                <p className='font-bold'>The Apartment by The Sloane Club</p>
                <p className='text-sm text-gray-500'>
                  Kensington and Chelsea, United Kingdom, London
                </p>
                <p className='text-sm text-gray-500'>
                  Starting from{' '}
                  <span className='text-base font-bold text-black'>
                    ₹ 42,369
                  </span>
                </p>
                <div className='flex text-[12px] items-center gap-x-2'>
                  <a
                    href='/'
                    className='bg-[#003580] rounded rounded-bl-none p-1 text-white'>
                    9.1
                  </a>
                  <p className='text-gray-600'>
                    Wonderful {'\u00B7'} 124 reviews
                  </p>
                </div>
              </div>
              <div className='flex flex-col flex-grow-0 gap-y-1 keen-slider__slide shrink-0'>
                <img src='images/homeguest/uk.webp' alt='' />
                <p className='font-bold'>
                  Cheval Three Quays at The Tower of London
                </p>
                <p className='text-sm text-gray-500'>
                  City of London, United Kingdom, London
                </p>
                <p className='text-sm text-gray-500'>
                  Starting from{' '}
                  <span className='text-base font-bold text-black'>
                    ₹ 50,813
                  </span>
                </p>
                <div className='flex text-[12px] items-center gap-x-2'>
                  <a
                    href='/'
                    className='bg-[#003580] rounded rounded-bl-none p-1 text-white'>
                    9.5
                  </a>
                  <p className='text-gray-600'>
                    Exceptional {'\u00B7'} 549 reviews
                  </p>
                </div>
              </div>
              <div className='flex flex-col flex-grow-0 gap-y-1 keen-slider__slide shrink-0'>
                <img src='images/homeguest/portugal.webp' alt='' />
                <p className='font-bold'>Flora Chiado Apartments</p>
                <p className='text-sm text-gray-500'>
                  Santa Maria Maior, Portugal, Lisboa
                </p>
                <p className='text-sm text-gray-500'>
                  Starting from{' '}
                  <span className='text-base font-bold text-black'>
                    ₹ 34,693
                  </span>
                </p>
                <div className='flex text-[12px] items-center gap-x-2'>
                  <a
                    href='/'
                    className='bg-[#003580] rounded rounded-bl-none p-1 text-white'>
                    9.7
                  </a>
                  <p className='text-gray-600'>
                    Exceptional {'\u00B7'} 160 reviews
                  </p>
                </div>
              </div>
            </div>
            {loaded && homeGuestLoveSliderRef.current && (
              <>
                <div
                  className='absolute -left-4 top-[34%]'
                  onClick={(e) =>
                    e.stopPropagation() ||
                    homeGuestLoveSliderRef.current?.prev()
                  }>
                  <NextPrevButton disabled={currentSlide === 0} />
                </div>
                <div
                  className='absolute -right-4 top-[34%]'
                  onClick={(e) =>
                    e.stopPropagation() ||
                    (homeGuestLoveSliderRef.current?.next() &&
                      console.log('first'))
                  }>
                  <NextPrevButton
                    next={true}
                    disabled={
                      currentSlide ===
                      homeGuestLoveSliderRef.current.track.details.slides
                        .length -
                        homeGuestLoveSliderRef.current.options.slides.perView
                    }
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
