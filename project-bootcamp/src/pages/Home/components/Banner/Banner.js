import React from  "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Banner.css';

const Banner = ({ slider }) => 
(
  <AwesomeSlider>
    <div className="Imagen-Banner" data-src={'/imagenes/banner1.jpg'} /> 
    <div className="Imagen-Banner" data-src={'/imagenes/banner2.jpg'} />  
  </AwesomeSlider>
);
export default Banner;