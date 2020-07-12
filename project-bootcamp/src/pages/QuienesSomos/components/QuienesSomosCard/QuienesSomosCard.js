import React from 'react';
import './QuienesSomosCard.css';
import image from '../../../../assets/logo cuadrado.jpg';

const QuienesSomosCard = () => {
  return(
    <div className="quienes-somos-card">
      <div className="quienes-somos-card-title">
        <h1>¿QUIÉNES SOMOS?</h1>
      </div>
      <p>
        Somos un equipo de trabajo y familia, que formó su empresa desde el año 2005 en la ciudad de Cali- Colombia. <br/>
        Nos caracterizamos por formar buenas relaciones comerciales con nuestros clientes y proveedores. Demostrando así cumplimiento, dedicación, transparencia, profesionalismo y honestidad.
        Trabajamos en unidad para grandes retos y logros. <br/>
        CCM Creactivos entrega sus servicios, conocimientos y productos en: Diseño Gráfico, Manejo de Medios, Venta de regalos empresariales e impresiones litográficas.
      </p>
      <img className="img-fluid img-card"src={image} alt="logo"/>
    </div>
  )
};

export default QuienesSomosCard;