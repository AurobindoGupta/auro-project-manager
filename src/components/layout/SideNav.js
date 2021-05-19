import React from 'react';
import {NavLink} from 'react-router-dom';

const SideNav = () =>{

    return(
       <ul className="center">
           <li><NavLink to ='/create'>New Project</NavLink></li>
           <li><NavLink to ='/'>Log Out</NavLink></li>
            {/* materializecss in classname*/}
           <li><NavLink to ='/' className='btn pink lighten-1 waves-effect waves-light'>AG</NavLink> </li>
       </ul>
    )
}

export default SideNav;