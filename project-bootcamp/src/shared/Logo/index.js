import React from 'react';
import './Logo.css';
import logo from '../../assets/LOGO SOLO EN JPG.jpg'

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        );
    }
}

export default Logo;