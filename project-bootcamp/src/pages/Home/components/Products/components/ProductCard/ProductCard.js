import React from 'react';
import './ProductCard.css';

const ProductCard = ({ item }) => {
  return(
    <div className="card-container">
      {item.map((product, index1) => 
          <div className="card">
            <img className="card-img-top card-image" src={product.fields.image.fields.file.url} alt="Card img cap"/>
            <div className="card-body">
              <h5 className="card-title">{product.fields.name}</h5>
              <p className="card-text">{product.fields.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{product.fields.brand}</li>
              <li className="list-group-item">{product.fields.size}</li>
            </ul>
          </div>
      )};
    </div>
  )
};

export default ProductCard;