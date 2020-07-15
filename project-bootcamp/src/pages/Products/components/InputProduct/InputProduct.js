import React, { Component } from 'react';
import PropTypes from 'prop-types';
class InputProduct extends Component {

  constructor(props) {
    super(props)

    this.state = { product: ''}
  }

  handleChange = (e) => {
    this.setState({ product: e.target.value })
  }

  render() {

    const { handleSearch } = this.props

    return(
      <form class="form-inline my-2 my-lg-0">
        <input 
          class="form-control mr-sm-2" 
          type="text" 
          placeholder="Buscar producto" 
          aria-label="Search"
          onChange={this.handleChange}
          value={this.state.product}
        />
        <button 
          className="btn btn-outline-primary"
          onClick={() => handleSearch(this.state.product)}
          type="button"
        >
          Buscar
        </button>
      </form>
    )
  }
};

InputProduct.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default InputProduct;