
const Product = ({ name, price, salePrice, imageUrl }) => (

        <div>
          <h2>{name}</h2>
          <p>Price: {price}</p>
          {salePrice && <p>Sale Price: {salePrice}</p>}
          <img src={imageUrl} alt={name} />
        </div>
      );

      export default Product