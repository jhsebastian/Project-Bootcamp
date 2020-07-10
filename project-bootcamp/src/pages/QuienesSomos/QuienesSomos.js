import React from 'react';
import Navbar from '../../shared/Navbar/index';
import './components/QuienesSomosCard/QuienesSomosCard';
import QuienesSomosCard from './components/QuienesSomosCard/QuienesSomosCard';
import Footer from '../../shared/Footer/Footer';
import './QuienesSomos.css'

const QuienesSomos = () => {
  return(
    <div>
      <Navbar />
      <div className="quienes-somos-container">
        <QuienesSomosCard />
      </div>
      <Footer />
    </div>
  )
};

export default QuienesSomos;

