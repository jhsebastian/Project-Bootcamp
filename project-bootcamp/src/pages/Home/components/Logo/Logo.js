import React from 'react';
import '../Logo/Logo.css';
import logo from '../../../../assets/Logo.jpg';

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} className="img-fluid" alt="Logo CCM Creactivos"/>
            </div>
        );
    }
}

export default Logo;