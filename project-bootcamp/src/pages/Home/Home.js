import React from 'react';
import Navbar from '../../shared/Navbar/index';
import Logo from './components/Logo/Logo';
import Banner from './components/Banner/Banner';
import Catalogo from './components/Catalogo/Catalogo';
import Footer from '../../shared/Footer/Footer';
import Login from '../Login/Login';

const Home = () => {
  return(
    <div>
      <Navbar/>
      <Logo/>
      <Banner/>
      <Catalogo />
      <Footer />
      <Login />
    </div>
  )
};

export default Home;