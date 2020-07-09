import React, { Component } from 'react';
import { client } from '../../client';
import ProductCard from './components/ProductCard/ProductCard';
import Navbar from '../../shared/Navbar/index';

class Products extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    client.getEntries()
      .then((response) => {
        console.log(response)
        this.setState({
          products: response.items
        })
      })
      .catch(console.error)
  }

  render() {
    return(
      <div>
        <Navbar/>
        <ProductCard item={this.state.products}/>
      </div>
    )
  };
};

export default Products