import React from 'react';
import users from '../../usersData/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import './Empinfo.css';

const Empinfo = (props) => {
    const {id,image,name,email,phone,income}=props.user;
        
    return (
            <div className='container'>
                <div className='employee-details'>
                    <img src={image} alt=''/>
                    <p><strong>Employee ID:  </strong>{id}</p> 
                    <p><strong>Employee Name:  </strong>{name}</p> 
                    <p><strong>Email:  </strong>{email}</p> 
                    <p><strong>Phone:  </strong>{phone}</p> 
                    <p><strong>Yearly Income:  </strong>${income}</p> 
                    <button className='button' onClick={()=>props.cartHandler(props.user)}>
                        <FontAwesomeIcon icon={faPlus} />                         
                        Add Count</button>
                </div>
            </div>
        
    );
};

export default Empinfo;