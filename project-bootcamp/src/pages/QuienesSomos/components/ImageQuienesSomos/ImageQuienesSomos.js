import React from 'react';
import quienesSomosImage from '../../../../assets/quienes-somos.jpg';
import '../ImageQuienesSomos/ImageQuienesSomos.css';

const ImageQuienesSomos = () => {
  return(
    <div className="quienes-somos-container">
      <img  src={quienesSomosImage} className="img-fluid" alt="Responsive quienesSomos"/>
    </div>
  )
};

export default ImageQuienesSomos;