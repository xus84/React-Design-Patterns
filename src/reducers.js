import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
  cart: [],

        products: [
            { id: 1, name: 'Product 1', price: '$10', imageUrl: 'product1.jpg' },
            { id: 2, name: 'Product 2', price: '$20', imageUrl: 'product2.jpg' },
            { id: 3, name: 'Product 3', price: '$30', imageUrl: 'product3.jpg' },
        ]
    
    
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.product] };
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(product => product.id !== action.productId) };
    default:
      return state;
  }
}

export default rootReducer;
