import React from 'react';
import './App.css';
import Logo from '../shared/Logo';
import Container from '../shared/Container';
import Banner from '../shared/Banner/Banner';
import Navbar from '../shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Logo />
      <Banner />
      <Container />
      </div>
  );
}

export default App;