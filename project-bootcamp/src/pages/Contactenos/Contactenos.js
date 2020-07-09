import React from 'react';
import Navbar from '../../shared/Navbar/index';
import ContactenosImage from './components/ContactenosImage/ContactenosImage';
import Footer from '../../shared/Footer/Footer';

const Contactenos = () => {
  return(
    <div>
      <Navbar />
      <ContactenosImage />
      <Footer />
    </div>
  )
};

export default Contactenos;