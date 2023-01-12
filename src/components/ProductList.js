import Product from './Product'

export const ProductList = ({ products }) => (
        <div>
          {products.map(product => (
            <Product
              key={product.id} 
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      );
      
    
  export  class ProductDecorator {
        constructor(product) {
            this.product = product;
        }
    
        get id() {
            return this.product.id;
        }
    
        get name() {
            return this.product.name;
        }
    
        get price() {
            return this.product.price;
        }
    
        get imageUrl() {
            return this.product.imageUrl;
        }
    }
    
 export   class ProductWithDiscount extends ProductDecorator {
        constructor(product, discount) {
            super(product);
            this.discount = discount;
        }
    
        get price() {
            return `${super.price} (Discount: ${this.discount})`;
        }
    }
    
 export   class ProductWithTax extends ProductDecorator {
        constructor(product, tax) {
            super(product);
            this.tax = tax;
        }
    
        get price() {
            return `${super.price} (Tax: ${this.tax})`;
        }
    }
    