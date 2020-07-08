import React from 'react';
import quienesSomosImage from '../../../../assets/quienes-somos.jpg';
import '../ImageQuienesSomos/ImageQuienesSomos.css';

const ImageQuienesSomos = () => {
  return(
    <div className="quienes-somos-container">
      <img  className="quienes-somos-image" src={quienesSomosImage} alt=""/>
    </div>
  )
};

export default ImageQuienesSomos;