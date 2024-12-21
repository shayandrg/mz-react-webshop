import React from 'react';

const Cart = ({ cartItems, removeFromCart }: any) => (
    <div className="cart">
      {cartItems.map((item: any) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>
            {item.name} <span>({item.quantity})</span>
          </p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <p className="total">
        Total:{" "}
        {cartItems.reduce(
          (total: number, item: any) => total + item.price * item.quantity,
          0
        )}{" "}
        SEK
      </p>
    </div>
  );
  

export default Cart;
