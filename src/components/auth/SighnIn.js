import React from 'react'
import { useState } from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

 

const SighnIn = (props) => {
    const { authError, auth } = props; 
   

    const[state,setState]= useState({
        email: '',
        password: ''
    });
     
    
    const handleChange = (e) =>{
       
       setState({...state,[e.target.id]:e.target.value});
       
    }
    
     const handleSubmit = (e) =>{
         e.preventDefault();
        props.signIn(state)
    }

   
    if(auth.uid) return <Redirect to= '/'/>

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
                    <div className = "red-text center">
                        {authError ? <p>{authError}</p> : null }
                    </div>
                </div>
                
            </form> 
            <h6 className="white-text">email: test@testuser.com ; password: test1234</h6>      
        </div>
    )
}

const mapStateToProps = (state) =>{
   return { 
       authError: state.auth.authError,
       auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SighnIn);