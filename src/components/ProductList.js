import React from 'react';
import Product from './Product';

const ListProjects = (props) => {
    return (
        <div>
            {props.products.map((product) => {
                return <Product key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} />
            })}
        </div>
    );
}

export default ListProjects;
