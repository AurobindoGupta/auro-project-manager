import React from 'react'
import { useState } from 'react';

 

const SighnIn = () => {

    const[email,setEmail]= useState('');
    const [password, setPassword] = useState(''); 
    
    const handleChange = (e) =>{
       
       if(e.target.id === 'email'){
           setEmail(e.target.value);
       }
       else{
           setPassword(e.target.value);
       }
    }
    
     const handleSubmit = (e) =>{
         e.preventDefault();
        console.log(email,password);
    }
    
    return (
        <div className="container">

            <form onSubmit={handleSubmit} className="white" >
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} ></input>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} ></input>
                </div>
                <div className="input-field">
                    <button className="btn btn-large pink lighten-1 z-depth-1 waves-effect waves-light">Login</button>
                </div>
            </form>            
        </div>
    )
}
export default SighnIn;