import React from 'react'
import { useState } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

 

const SighnUp = (props) => {

    const[statem,setState]= useState({
       email: '',
       password: '',
       firstName: '',
       lastName: '' 
    });
     
    
    const handleChange = (e) =>{
       
       if(e.target.id === 'email'){
           setState({...statem,[e.target.id]:e.target.value});
       }
       else if(e.target.id === 'password') {
        setState({...statem, [e.target.id]:e.target.value});
       }
       else if(e.target.id === 'firstName') {
        setState({...statem, [e.target.id]:e.target.value});
       }
       else if(e.target.id === 'lastName') {
        setState({...statem, [e.target.id]:e.target.value});
       }
        
    }
    
     const handleSubmit = (e) =>{
         e.preventDefault();
        props.signUp(statem)
    }

    const {auth, authError } = props;
    if(auth.uid) return <Redirect to='/' />
    
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
                    <button className="btn btn-large pink lighten-1 z-depth-1 waves-effect waves-light">SIGN UP</button>
                    <div className="red-text center">
                        { authError? <p>{authError}</p> : null }
                    </div>
                </div>
            </form>            
        </div>
    )
}


const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError 
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SighnUp);