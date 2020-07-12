import React from 'react';
import image from '../../../../assets/logo cuadrado.jpg';
import './ContactanosCard.css';

const ContactenosImage = () => {
  return(
    <div className="contactanos-card">
      <div className="contactanos-card-title">
        <h1>CONTÁCTANOS</h1>
      </div>
      <p className="contactanos-card-p">
        Carrera 18A 13- 37 Cali -Colombia
      </p>
      <p>
        312 232 8565 - 312 223 7998
        <br/>
        377 3737 - 557 5139
      </p>
      <p>
        mediosdigitales@ccmcreactivos.com
        <br/>
        cotizaciones@ccmcreactivos.com
      </p>
      <img className="img-fluid img-card"src={image} alt="logo"/>
    </div>
  )
};

export default ContactenosImage