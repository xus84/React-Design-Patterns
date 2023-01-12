export default class AddProductCommand {
        constructor(product) {
            this.product = product;
        }
    
        execute(state) {
            state.products.push(this.product);
        }
    
        undo(state) {
            const index = state.products.findIndex(p => p.id === this.product.id);
            state.products.splice(index, 1);
        }
    }
    