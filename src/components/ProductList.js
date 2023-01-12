import React from 'react'
import Product from './Product'
import AddProductCommand from './AddProductCommand';
import UpdateProductCommand from './UpdateProductCommand';
import DeleteProductCommand from './DeleteProductCommand';

export default class ProductList extends React.Component {
        state = {
            products: [
                { id: 1, name: 'Product 1', price: '$10', imageUrl: 'product1.jpg' },
                { id: 2, name: 'Product 2', price: '$20', imageUrl: 'product2.jpg' },
                { id: 3, name: 'Product 3', price: '$30', imageUrl: 'product3.jpg' },
            ],
            commandHistory: []
        }
    
        addProduct = (product) => {
            const command = new AddProductCommand(product);
            command.execute(this.state);
            this.setState({ products: this.state.products, commandHistory: [...this.state.commandHistory, command] });
        }
    
        updateProduct = (product) => {
            const command = new UpdateProductCommand(product);
            command.execute(this.state);
            this.setState({ products: this.state.products, commandHistory: [...this.state.commandHistory, command] });
        }
    
        deleteProduct = (productId) => {
            const command = new DeleteProductCommand(productId);
            command.execute(this.state);
            this.setState({ products: this.state.products, commandHistory: [...this.state.commandHistory, command] });
        }
    
        undo = () => {
            const lastCommand = this.state.commandHistory.pop();
            lastCommand.undo(this.state);
            this.setState({ products: this.state.products, commandHistory: this.state.commandHistory });
        }
    
        render() {
            return (
                <div>
                    <button onClick={() => this.undo()}>Undo</button>
                    {this.state.products.map((product) => {
                        return <Product key={product.id} product={product} onUpdate={this.updateProduct} onDelete={this.deleteProduct}/>
                    })}
                </div>
            );
        }
    }
    