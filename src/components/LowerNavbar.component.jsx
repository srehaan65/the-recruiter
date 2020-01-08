import React, { Component } from 'react';
import Dropdown from './Homepage/Dropdown.component'

class LowerNavbar extends Component {
    render() {
        return (
            <div className="menubar">
                <div className="menubar-inner-left">
                    <ul className="container">
                        <li>
                            <select className="lower-container-left-dropdown">
                                <option value="volvo">Software Tester</option>
                                <option value="saab">Java Developer</option>
                                <option value="mercedes">React Developer</option>
                                <option value="audi">Android Developer</option>
                                <option value="saab">iOS Developer</option>
                                <option value="mercedes">React Native developer</option>
                                <option value="audi">Angular Developer</option>
                            </select>
                        </li>
                        <li><a to="/">Nimap Infotech HR</a></li>
                    </ul>
                </div>
                <div className="menubar-inner-right">
                    <ul className="container">

                        <li>
                            <span>
                                <img className="menubar-container-icon"
                                    src="/images/plus.png" alt="plus" height="25px" width="25px"
                                    style={{ opacity: "1" }} >
                                </img>
                            </span>
                            <a to="/">Add Candidates</a>
                        </li>

                        <li>
                            <span>
                                <img className="menubar-container-icon"
                                    src="/images/EDIT.png" alt="plus" 
                                    style={{ opacity: "1" ,height:"15px", width:"15px"}} >

                                </img>
                            </span>
                            <a to="/">Edit</a></li>
                        <li>
                            <select className="lower-container-right-dropdown">
                                <option value="volvo">Job Menu</option>
                                <option value="saab">lorem ipsum</option>
                                <option value="mercedes">lorem ipsum</option>
                                <option value="audi">lorem ipsum</option>
                                <option value="saab">lorem ipsum</option>
                                <option value="mercedes">lorem ipsum</option>
                                <option value="audi">lorem ipsum</option>
                            </select>
                        </li>
                        <li className="menubar-dropdown"><a to="/">Add new Job</a></li>
                    </ul>
                </div>
                
                
            </div>
        )
    }
}

export default LowerNavbar;