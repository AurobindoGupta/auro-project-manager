import React from 'react';
import {Link} from 'react-router-dom';
import SighnedInLinks from './SighnedInLinks';
import SighnedIOutLinks from './SighnedOutLinks';

const Navbar = () =>{

    return( // materializecss 
       <nav className="nav-wrapper grey darken-3"> 
            <div className="container">
            
                <Link to='/' className="brand-logo">ProjectManager</Link>
                <SighnedInLinks />
                <SighnedIOutLinks />
            </div>
       </nav>
    )
}

export default Navbar;