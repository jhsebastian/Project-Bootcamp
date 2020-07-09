import React from 'react';
import Navbar from '../../shared/Navbar/index';
import Logo from './components/Logo/Logo';
import Banner from './components/Banner/Banner';
import Catalogo from './components/Catalogo/Catalogo';

const Home = () => {
  return(
    <div>
      <Navbar/>
      <Logo/>
      <Banner/>
      <Catalogo />
    </div>
  )
};

export default Home;