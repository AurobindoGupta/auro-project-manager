import React from 'react';
import {Link} from 'react-router-dom';
import SighnedInLinks from './SighnedInLinks';
import SighnedIOutLinks from './SighnedOutLinks';
import { connect } from 'react-redux'; 

const Navbar = (props) =>{
    const { auth, profile } = props;
// console.log("check",profile.initials);
    const links = auth.uid ? <SighnedInLinks profile={profile.initials} /> : <SighnedIOutLinks/>

    return( // materializecss 
        <>
         <nav className="nav-wrapper deep-purple "> 
            <div className="container">
            
                <Link to='/' className="brand-logo">ProjectManager</Link>
                    <a href='#' data-target="mobile-demo" className="sidenav-trigger" >
                    <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>{auth.isLoaded && links}</li> 
                    {/* getiing a flicker of logout links if not using .isLoaded */}
                    </ul>
                
            </div>
       </nav>
           
            <ul className="sidenav" id="mobile-demo" draggable="true" >
            
                <li>{auth.isLoaded && links}</li>
                
            
            </ul>
       
        </>
    )
}

const mapStateToProps = (state) =>{
    // console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);