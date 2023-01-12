export default class UpdateProductCommand {
        constructor(product) {
            this.product = product;
            this.previousProduct = null;
        }
    
        execute(state) {
            const index = state.products.findIndex(p => p.id === this.product.id);
            this.previousProduct = state.products[index];
            state.products[index] = this.product;
        }
    
        undo(state) {
            const index = state.products.findIndex(p => p.id === this.product.id);
            state.products[index] = this.previousProduct;
        }
    }