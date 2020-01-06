import React, { Component } from 'react';
import Dropdown from './Homepage/Dropdown.component'

class LowerNavbar extends Component {
    render() {
        return (
            <div className="menubar">
                <div className="menubar-inner-left">
                    <ul className="container">
                        <li>
                            <select className="lower-container-right-dropdown">
                                <option value="volvo">Software Tester</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </li>
                        <li><a to="/">Company name</a></li>
                    </ul>
                </div>
                <div className="menubar-inner-right">
                    <ul className="container">
                        <li><a to="/"><span><img
                            src="/images/plus.png" alt="plus" height="15px"
                            style={{ opacity: "1" }} >

                        </img></span>Add Candidates</a></li>
                        <li><a to="/"><span><img
                            src="/images/EDIT.png" alt="plus" height="15px" 
                            margin-right="7px"
                            style={{ opacity: "1"}} >

                        </img></span>Edit</a></li>
                        <li>
                            <select className="lower-container-right-dropdown">
                                <option value="volvo">Job Menu</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </li>
                        <li className="menubar-dropdown"><a to="/">Add new JOb</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default LowerNavbar;