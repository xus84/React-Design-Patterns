import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductList);
