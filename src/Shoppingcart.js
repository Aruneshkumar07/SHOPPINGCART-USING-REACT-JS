import React, { useReducer } from 'react';
import { initialState, reducer } from './Reducer';
import './App.css';

const ShoppingCart = ({ products }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const updateItemQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  return (
    <div id="total">
      <h2 id='pro'>SHOPPING CART</h2>
     
      <h2 >PRODUCTS</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img id='img1' src={product.image}></img>
            {product.name} - RS.{product.price}
            <button onClick={() => addItemToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <ul>
        <h1>Add to Cart</h1>
        {state.cart.map(item => (
          <li key={item.id}>
            {item.name} - Rs.{item.price} x {item.quantity}
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3 id='bill'>Total: Rs.{state.cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
    </div>
  );
};

export default ShoppingCart;
