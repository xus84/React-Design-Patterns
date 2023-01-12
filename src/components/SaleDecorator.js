import Product from './Product';


const SaleDecorator = (Product) => {
        return function SaleComponent({ products, saleDiscount }) {
        return (
        <div>
        {products.map(product => (
        <Product
        key={product.id}
        name={product.name}
        price={product.price}
        salePrice={product.price - (product.price * (saleDiscount / 100))}
        imageUrl={product.imageUrl}
        />
        ))}
        </div>
        );
        }
        };
        
        export const SaleProductList = SaleDecorator(Product);


        export default SaleDecorator