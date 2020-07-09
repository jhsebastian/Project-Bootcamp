import React from 'react';
import Navbar from '../../shared/Navbar/index';
import '../QuienesSomos/components/ImageQuienesSomos/ImageQuienesSomos';
import ImageQuienesSomos from '../QuienesSomos/components/ImageQuienesSomos/ImageQuienesSomos';
import Footer from '../../shared/Footer/Footer';

const QuienesSomos = () => {
  return(
    <div>
      <Navbar />
      <ImageQuienesSomos />
      <Footer />
    </div>
  )
};

export default QuienesSomos;

