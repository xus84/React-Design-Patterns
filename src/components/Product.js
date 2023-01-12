import React from 'react';

const Product = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.imageUrl} alt={props.name} />
            <p>Price: {props.price}</p>
        </div>
    );
}

export default Product;