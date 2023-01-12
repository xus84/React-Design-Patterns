import ProductList from './components/ProductList';
import Product from './components/Product';


const products = [
        { id: 1, name: 'Product 1', price: '$10', imageUrl: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: '$20', imageUrl: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: '$30', imageUrl: 'product3.jpg' },
    ];

function App() {
        return (
                <ProductList products={products} render={(products) => {
                        return products.map((product) => {
                                return <Product key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} />;
                        });
                } } />
        );
}

export default App