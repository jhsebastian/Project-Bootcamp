import React from 'react';
import './Card.css';

const Card = ({ title, urlImage, urlPdf, namePdf }) => {
  return(
    <div className="card-container-catalogo">
      <div className="card-container-title">
        <h3>{title}</h3>
      </div>
      <div className="card-container-image">
        <img className="img-fluid" alt="Responsive img" src={urlImage}/>
      </div>
      <a class="btn btn-light" href={urlPdf} download={namePdf}>Obtener Catálogo</a>
    </div>
  )
};

export default Card;