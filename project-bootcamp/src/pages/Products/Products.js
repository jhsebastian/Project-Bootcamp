import React, { Component } from 'react';
import { client } from '../../API/client';
import ProductCard from './components/ProductCard/ProductCard';
import Navbar from '../../shared/Navbar/index';
import Footer from '../../shared/Footer/Footer';
import InputProduct from './components/InputProduct/InputProduct';

class Products extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    client.getEntries()
      .then((response) => {
        this.setState({
          products: response.items
        })
      })
      .catch(console.error)
  }

  render() {
    return(
      <div>
        <Navbar>
          <InputProduct />
        </Navbar> 
        <ProductCard item={this.state.products}/>
        <Footer />
      </div>
    )
  };
};

export default Products