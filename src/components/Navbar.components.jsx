import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Homepage/Dropdown.component'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-inner-left">
                    <ul className="container">
                        <li><a>
                            <img
                                src="/images/nimap-logo1.png" alt="plus" height="40px"
                                style={{ opacity: "1" }} >

                            </img></a></li>
                        <li className="navbar-jobs"><a to="/">Jobs</a></li>
                        <li><a to="/">Calendar</a></li>
                        <li><a to="/">Career Page</a></li>
                        <li><a to="/">Reports</a></li>
                    </ul>
                </div>
                <div className="navbar-inner-right">
                    <ul className="container">
                        <li>
                            <select className="lower-container-right-dropdown">
                                <option value="volvo">
                                   Nimap Infotech</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </li>
                        <li><a to="/"><img
                                src="/images/notification.png" alt="plus" height="20px"
                                style={{ opacity: "0.9" }} >

                            </img></a></li>
                        <li><a to="/"><img
                                src="/images/settings-work-tool.png" alt="plus" height="20px"
                                style={{ opacity: "0.9" }} >

                            </img></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;



