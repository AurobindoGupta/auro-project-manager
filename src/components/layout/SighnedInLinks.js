import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SighnedInLinks = (props) =>{
    // console.log("check",props)
    return(
       <ul className="right">
           <li><NavLink to ='/create'>New Project</NavLink></li>
           <li><a onClick={props.signOut}>Log Out</a></li>
            {/* materializecss in classname*/}
           <li><NavLink to ='/' className='btn btn-floating pink lighten-1 waves-effect waves-light'>
               {props.profile}
           </NavLink> </li>
       </ul>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signOut:() => dispatch(signOut())
    }
}


export default connect(null,mapDispatchToProps)(SighnedInLinks);