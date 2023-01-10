import React from 'react';
import ProductList from './components/ProductList';

function App() {
  const products = [
    { id: 1, name: 'Product 1', price: '$10', imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: '$20', imageUrl: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: '$30', imageUrl: 'product3.jpg' },
  ];

  return (
    <div className="app">
      <ProductList products={products} />
    </div>
  );
}

export default App;
