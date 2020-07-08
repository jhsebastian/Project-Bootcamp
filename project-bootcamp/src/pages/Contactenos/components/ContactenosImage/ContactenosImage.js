import React from 'react';
import ImageContactenos from '../../../../assets/contactanos.jpg';
import '../ContactenosImage/ContactenosImage.css';

const ContactenosImage = () => {
  return(
    <div className="contactanos-image-container">
      <img  className="contactanos-image" src={ImageContactenos} alt="Contactanos Imagen"/>
    </div>
  )
};

export default ContactenosImage