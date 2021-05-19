import React from 'react'
import { useState } from 'react';

 

const SighnUp = () => {

    const[state,setState]= useState({
       email: '',
       password: '',
       firstName: '',
       lastName: '' 
    });
     
    
    const handleChange = (e) =>{
       
       if(e.target.id === 'email'){
           setState({...state,[e.target.id]:e.target.value});
       }
       else if(e.target.id === 'password') {
        setState({...state, [e.target.id]:e.target.value});
       }
       else if(e.target.id === 'firstName') {
        setState({...state, [e.target.id]:e.target.value});
       }
       else if(e.target.id === 'lastName') {
        setState({...state, [e.target.id]:e.target.value});
       }
        
    }
    
     const handleSubmit = (e) =>{
         e.preventDefault();
        console.log(state);
    }
    
    return (
        <div className="container">

            <form onSubmit={handleSubmit} className="white" >
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} ></input>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} ></input>
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={handleChange} ></input>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={handleChange} ></input>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">SIGN UP</button>
                </div>
            </form>            
        </div>
    )
}
export default SighnUp;