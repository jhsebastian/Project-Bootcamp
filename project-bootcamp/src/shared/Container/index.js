import React from 'react';
import propTypes from 'prop-types';

import './Container.css';

const Container = ({ children }) => {
    return <div className="container">{children}</div>
};

Container.propTypes = {
    children: propTypes.node,
};

export default Container;