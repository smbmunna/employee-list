import React, { useState } from 'react';
import users from '../../usersData/User.js';
import Empinfo from '../Employee-info/Empinfo.js';
import Cart from '../Cart/Cart.js';
import './Employee.css';


const Employee = () => {
    const [cart, setCart]=useState([]);
    const cartHandler= (user)=>{
        const newCart= [...cart,user];
        setCart(newCart);
    }
    
    return (
        <div>
            <h1>Employee list</h1>
            <div className='container'>                
                <div>
                    {users.map(user=><Empinfo cartHandler={cartHandler} user={user}></Empinfo>)}
                </div>
                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Employee;