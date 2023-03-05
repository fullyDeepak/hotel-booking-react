import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Offers from '../components/Offers';
import Main from '../components/Main';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Offers />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
