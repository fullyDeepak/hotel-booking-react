import React from 'react';
import Header from '../components/Header';
import HotelDetail from '../components/HotelDetail';
import NavBar from '../components/NavBar';

const Hotel = () => {
  return (
    <>
      <NavBar />
      <Header type='list' />
      <HotelDetail />
    </>
  );
};

export default Hotel;
