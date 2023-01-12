export default class DeleteProductCommand {
        constructor(productId) {
            this.productId = productId;
            this.deletedProduct = null;
        }
    
        execute(state) {
            const index = state.products.findIndex(p => p.id === this.productId);
            this.deletedProduct = state.products[index];
            state.products.splice(index, 1);
        }
    
        undo(state) {
            state.products.push(this.deletedProduct);
        }
    }