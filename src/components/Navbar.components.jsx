import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import Dropdown from './Homepage/Dropdown.component'

class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
            <div className="navbar-inner-left">
                    <ul className="container">
                        <li><a to="/">The Recruiter Logo</a></li>
                        <li><a to="/">Jobs</a></li>
                        <li><a to="/">Calendar</a></li>
                        <li><a to="/">Career Page</a></li>
                        <li><a to="/">Reports</a></li>
                    </ul>
            </div>
             <div className="navbar-inner-right">
             <ul className="container">
                 <li><Dropdown /></li>
                 <li><a to="/">Notifications icon</a></li>
                 <li><a to="/">Settings Icon</a></li>
             </ul>
     </div>
     </div>
        )
    }
}

export default Navbar;