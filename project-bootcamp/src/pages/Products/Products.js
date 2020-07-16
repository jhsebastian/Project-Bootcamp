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
    const { isCart } = this.props;

    if (isCart) {
      const cart = JSON.parse(localStorage.getItem('cart') || "[]");

      if (cart.length > 0) {
        client.getEntries({"sys.id[in]": cart.join(",")})
          .then((response) => {
            this.setState({
              products: response.items
            })
          })
          .catch(console.error)
      }
    } else {
      client.getEntries()
        .then((response) => {
          this.setState({
            products: response.items
          })
        })
        .catch(console.error)
    }
  }

  handleSearch = (search) => {
    client.getEntries({ "query": search})
      .then((response) => {
        this.setState({
          products: response.items
        })
      })
      .catch(console.error)
  }

  render() {
    const { isCart } = this.props;
    return(
      <div>
        <Navbar/>
        <h1 className="title">Productos</h1>
        { !isCart && (
            <div className="container-input">
              <InputProduct handleSearch={this.handleSearch}/>
            </div>
        )}
        <ProductCard item={this.state.products}/>
        <Footer />
      </div>
    )
  };
};

export default Products