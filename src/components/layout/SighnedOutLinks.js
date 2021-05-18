import React from 'react';
import {NavLink} from 'react-router-dom';

const SighnedOutLinks = () =>{

    return(
       <ul className="right">
           <li>
            <NavLink to ='/'>Sighn Up</NavLink>
           </li>
           <li>
            <NavLink to ='/'>Login</NavLink>
           </li>
            
           
       </ul>
    )
}

export default SighnedOutLinks;