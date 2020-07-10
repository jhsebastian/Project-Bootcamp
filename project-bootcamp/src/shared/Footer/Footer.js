import React from 'react';
import './Footer.css';

const Footer = () => {
  return(
    <div className="container">
      <footer class="">
          <div class="">
            <h1 class="text-center text-uppercase font-weight-bolder">Oficinas</h1>
            <article class="">
              <h4 class="text-uppercase text-center font-weight-bold">Cali - Colombia</h4>
              <span class="f">Carrera 18A 13- 37 </span>
              <p class="" title="Call Tokyo Office">
                312 232 8565 - 312 223 7998
              </p>
            </article>
          </div>
          <section class="">
            <a class="" href="mailto:mediosdigitales@ccmcreactivos.com" >
              mediosdigitales@ccmcreactivos.com
            </a>
            <div class="" >
              <form class="form-inline">
                <div class="form-group mb-2">
                  <label for="staticEmail2" class="sr-only">Email</label>
                  <input type="text" readonly class="form-control" id="staticEmail2" value="email@example.com"/>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Enviar</button>
              </form>
            </div>
          </section>
          <div class="" >
            <div class="">
              <p class="">
                Copyright © CCM CREACTIVOS
              </p>
            </div>
          </div>
        </footer>
    </div>
  )
};

export default Footer;