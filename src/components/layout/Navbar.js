import React from 'react';
import {Link} from 'react-router-dom';
import SideNav from './SideNav';
import SighnedInLinks from './SighnedInLinks';
import SighnedIOutLinks from './SighnedOutLinks';

const Navbar = () =>{
    
    return( // materializecss 
        <>
       <nav className="nav-wrapper deep-purple "> 
            <div className="container">
            
                <Link to='/' className="brand-logo">ProjectManager</Link>
                    
                    <Link to='#' data-target="mobile-demo" className="sidenav-trigger show-on-small" ><i className="material-icons">menu</i></Link>
                    <ul className="right hide-on-med-and-down">
                    
                    <li><SighnedIOutLinks /></li>
                    <li><SighnedInLinks /></li>
                    </ul>
                
            </div>
       </nav>
            <ul className="sidenav" id="mobile-demo" draggable="true" >
            
                <li className="sidenav-close"><SideNav /> </li>
                
            
            </ul>
        </>
        
    )
}

export default Navbar;