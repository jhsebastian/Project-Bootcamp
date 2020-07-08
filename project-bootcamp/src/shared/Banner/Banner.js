import React from  "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Banner.css';

const Banner = ({ slider }) => 
(
  <AwesomeSlider>
    <div className="Imagen-Banner" data-src={'/imagenes/banner1.jpeg'} /> 
    <div className="Imagen-Banner" data-src={'/imagenes/banner2.jpeg'} />  
  </AwesomeSlider>
);
export default Banner;