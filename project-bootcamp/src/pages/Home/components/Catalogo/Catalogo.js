import React from 'react';
import hogarPDF from '../../../../assets/Hogar.pdf';
import herramientasPDF from '../../../../assets/Herramientas.pdf';
import Card from './components/Card';
import '../Catalogo/Catalogo.css';
import hogarImage from '../../../../assets/HogarImage.png';
import herramientasImage from '../../../../assets/HerramientasImage.png';

const Catalogo = ({ title, urlImage }) => {
  return(
    <div className="catalogo-container">
      <Card
        title="Nuestra línea hogar"
        urlImage={hogarImage}
        urlPdf={hogarPDF}
        namePdf="Hogar-PDF-Descargable"
      />
      <Card
        title="Nuestra línea herramientas"
        urlImage={herramientasImage}
        urlPdf={herramientasPDF}
        namePdf="Herramientas-PDF-Descargable"
      />
    </div>
  )
};

export default Catalogo;