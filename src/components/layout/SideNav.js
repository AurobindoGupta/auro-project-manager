import React from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import SighnedInLinks from './SighnedInLinks';
import SighnedIOutLinks from './SighnedOutLinks';
import { connect } from 'react-redux'; 

const SideNav = (props) =>{
    const { auth } = props;

    const links = auth.uid ? <SighnedInLinks/> : <SighnedIOutLinks/>
    return(
       <ul className="center">
           <li>{links}</li>
       </ul>
    )
}

const mapStateToProps = (state) =>{
    console.log(state);
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(SideNav);