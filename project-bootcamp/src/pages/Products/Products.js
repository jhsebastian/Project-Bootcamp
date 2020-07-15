import React, { Component } from 'react';
import { client } from '../../API/productAPI';
import ProductCard from './components/ProductCard/ProductCard';
import Navbar from '../../shared/Navbar/index';
import Footer from '../../shared/Footer/Footer';
import InputProduct from './components/InputProduct/InputProduct';
import './Products.css'

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

  handleSearch = (search) => {
    console.log(search)
  }

  render() {
    return(
      <div>
        <Navbar/>
        <h1 className="title">Productos</h1>
        <div className="container-input">
          <InputProduct handleSearch={this.handleSearch}/>
        </div>
        
        <ProductCard item={this.state.products}/>
        <Footer />
      </div>
    )
  };
};

export default Products