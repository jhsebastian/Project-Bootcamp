import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
const Button = ({ name, home, quienesSomos, contactanos, productos }) => {
  return(
    <nav class="navbar navbar-expand-xl navbar-dark bg-primary justify-content-between col-xs-12">
        <Link to="/">
          <a class="navbar-brand" href="#">{name}</a>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/quienessomos">
                <a class="nav-link" href="#">{quienesSomos}</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contactanos">
                <a class="nav-link" href="#">{contactanos}</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/productos">
                <a class="nav-link" href="#">{productos}</a>
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
            <button class="btn btn-outline-light my-2 my-sm-0">Search</button>
          </form>
        </div>
    </nav>
  )
}

export default Button; 