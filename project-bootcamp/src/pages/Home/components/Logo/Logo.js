import React from 'react';
import '../Logo/Logo.css';
import logo from '../../../../assets/Logo.jpg';

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} class="img-fluid" alt="Responsive image"/>
            </div>
        );
    }
}

export default Logo;