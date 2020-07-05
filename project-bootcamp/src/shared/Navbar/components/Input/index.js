import React from 'react';
import '../Input/Input.css';
import searchLogo from '../../../../assets/search.svg';

const Input = () => {
  return (
    <div>
      <input className="input" type="text"/>
      <span className="searchLogo"><img src={searchLogo} alt=""/></span>
    </div>
  )
};

export default Input;