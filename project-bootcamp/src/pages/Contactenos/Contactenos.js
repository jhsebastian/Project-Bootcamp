import React from 'react';
import Navbar from '../../shared/Navbar/index';
import ContactanosCard from './components/ContactanosCard/ContactanosCard';
import Footer from '../../shared/Footer/Footer';
import './Contactenos.css';

const Contactenos = () => {
  return(
    <div>
      <Navbar />
      <div className="contactanos-container">
        <ContactanosCard />
      </div>
      <Footer />
    </div>
  )
};

export default Contactenos;