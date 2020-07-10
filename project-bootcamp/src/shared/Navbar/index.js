import React from 'react';
import './Navbar.css';
import Button from './components/Button';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="buttons">
        <Button 
          name="CCM CREACTIVOS"
          quienesSomos="Quiénes Somos"
          contactanos="Contáctanos"
          productos="Productos"
        />
      </div>
    </div>
  )
}

export default Navbar;