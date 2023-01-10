import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions';

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: product => dispatch(addToCart(product))
  }
}

export default connect(null, mapDispatchToProps)(Product);

