import React from 'react';
import {NavLink} from 'react-router-dom';

const SighnedInLinks = () =>{

    return(
       <ul className="right">
           <li>
            <NavLink to ='/'>New Project</NavLink>
           </li>
           <li>
            <NavLink to ='/'>Log Out</NavLink>
           </li>
            {/* materializecss */}
           <li>
            <NavLink to ='/' className='btn btn-floating pink lighten-1'> AG </NavLink>  
           </li>
       </ul>
    )
}

export default SighnedInLinks;