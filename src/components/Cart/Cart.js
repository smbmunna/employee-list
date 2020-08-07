import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart= props.cart;
    let totalIncome=0;
    for(let i=0; i<cart.length; i++){
        totalIncome+=cart[i].income;
    }
    return (
        <div className='cart-container'>
            <h4>Employee Cart</h4>
            <p>Employees Selected: {cart.length}</p>
            <p>Total Annual Income: ${totalIncome}</p>
        </div>
    );
};

export default Cart;