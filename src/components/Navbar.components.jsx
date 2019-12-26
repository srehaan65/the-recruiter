import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
            <div className="navbar-inner-left">
                    <ul className="container">
                        <li><a to="/">The Recruiter</a></li>
                        <li><a to="/">Jobs</a></li>
                        <li><a to="/">Calendar</a></li>
                        <li><a to="/">Career Page</a></li>
                    </ul>
            </div>
             <div className="navbar-inner-right">
             <ul className="container">
                 <li><a to="/">The Recruiter</a></li>
                 <li><a to="/">Jobs</a></li>
                 <li><a to="/">Calendar</a></li>
                 <li><a to="/">Career Page</a></li>
             </ul>
     </div>
     </div>
        )
    }
}

export default Navbar;