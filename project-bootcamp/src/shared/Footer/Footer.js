import React from 'react';
import './Footer.css';

const Footer = () => {
  return(
    <div className="container">
      <footer class="footer-container">
        <div>
          <h1 class="text-left text-uppercase font-weight-bolder">CCM Creactivos</h1>
          <h4 class="text-uppercase text-left font-weight-bold">Cali - Colombia</h4>
          <p class="">Copyright © CCM CREACTIVOS</p>
          
          <form class="form-inline form-container">
            <div class="form-group mb-2">
              <input class="input-email" type="text" readonly class="form-control" id="staticEmail2" placeholder="email@example.com"/>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Enviar</button>
          </form>
        </div>
        <div className="footer-container-derecha">
          <p class="">Carrera 18A 13- 37 </p>
          <p class="">+57 312 232 8565</p>
          <p className="">+57 312 223 7998</p>
          <p className="">
            <a class="footer-email text-right" href="mailto:mediosdigitales@ccmcreactivos.com">mediosdigitales@ccmcreactivos.com</a>
          </p>
        </div>
        </footer>
    </div>
  )
};

export default Footer;