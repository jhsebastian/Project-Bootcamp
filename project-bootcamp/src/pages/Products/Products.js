import React, { Component } from 'react';
import { client } from '../../API/productAPI';
import ProductCard from './components/ProductCard/ProductCard';
import Navbar from '../../shared/Navbar/index';
import Footer from '../../shared/Footer/Footer';
import InputProduct from './components/InputProduct/InputProduct';
import './Products.css'

class Products extends Component {

  state = {
    products: [],
    item: []
  }

  componentDidMount() {
    client.getEntries()
      .then((response) => {
        this.setState({
          products: response.items
        })
        console.log(response)
      })
      .catch(console.error)
  }

  handleSearch = (search) => {
    console.log(search)
    client.getEntries("PD2H5xht7Df6Nq2LfhVnT")
      .then((response) => {
        this.setState({
          item: response.items
        })
          this.state.item.map(item => console.log(item.fields.name))
      })
      .catch(console.error)
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