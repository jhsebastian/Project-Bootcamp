import React from 'react';
import './Footer.css';

const Footer = () => {
  return(
    <footer class="pa4 pa5-l black-70 bt b--black-10">
  <div class="mb4-l cf">
    <h1 class="fl w-100 pv0 f6 fw6 ttu tracked mb4">Oficinas</h1>
    <article class="fl w-50 dib-ns w-auto-ns mb4 pl2 pl0-ns">
      <h4 class="f5 f4-l fw6">Cali - Colombia</h4>
      <span class="f7 f6-l db black-70">Carrera 18A 13- 37 </span>
      <a href="tel:+444444444444" class="f6 db dim fw6 pv3 link black-70" title="Call Tokyo Office">
        312 232 8565 - 312 223 7998
      </a>
      <a href="tel:+444444444444" class="f6 db dim fw6 pv3 link black-70" title="Call Tokyo Office">
        mediosdigitales@ccmcreactivos.com
      </a>
    </article>
  </div>
  <section class="cf mb5">
    <div class="mb4 mb0-ns w-100 w-50-l fr">
      <a class="black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l" href="mailto:hello@impossible.com" >
        mediosdigitales@ccmcreactivos.com
      </a>
    </div>
    <div class="mb4 mb0-ns fl w-100 w-50-l" >
      <p class="f4 fw6 mb2 f6 mt0">
        Suscríbete para recibir nuestras ofertas
      </p>
      <input placeholder="Correo Electrónico" class="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"/>
      <input type="submit" class="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"/>
    </div>
  </section>
  <div class="dt dt--fixed w-100" >
    <div class="dn dtc-ns v-mid">
      <p class="f7 black-70 dib pr3 mb3">
        Copyright © CCM CREACTIVOS
      </p>
    </div>
    <div class="db dtc-ns black-70 tc tr-ns v-mid">
    </div>
  </div>
  <div class="db dn-ns">
    <p class="f7 black-70 mt4 tc">
      Copyright © Your Company 2038
    </p>
  </div>
</footer>
  )
};

export default Footer;