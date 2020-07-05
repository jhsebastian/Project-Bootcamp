import React from 'react';
import './Navbar.css';
import Input from './components/Input';
import Button from './components/Button';

const Navbar = () => {
  return (
    <div className="navbar">
      <Input />
      <div className="buttons">
        <Button text="Corporativo"/>
        <Button text="Catálogo"/>
        <Button text="Blog"/>
        <Button text="Nuestros Clientes"/>
        <Button text="Sobre Nosotros"/>
        <Button text="Contáctanos"/>
      </div>
    </div>
  )
}

export default Navbar;