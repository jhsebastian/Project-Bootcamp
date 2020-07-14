import React from 'react';
import './App.css';
import Home from '../pages/Home/Home';
import QuienesSomos from '../pages/QuienesSomos/QuienesSomos';
import Productos from '../pages/Products/Products';
import Contactanos from '../pages/Contactenos/Contactenos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/quienessomos">
          <QuienesSomos/>
        </Route>
        <Route exact path="/contactanos">
          <Contactanos/>
        </Route>
        <Route exact path="/productos">
          <Productos/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;