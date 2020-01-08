import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Homepage/Dropdown.component';
import { Button, CardBody, Card } from 'reactstrap';


class Navbar extends Component {
    myFunction(e){
        e.preventDefault();
        if(this.state.navbar=='navbar'){
            this.setState({navbar:`${this.state.navbar} responsive`})
            document.getElementById("lower-container").style.display = "none";
        }
        else{
            this.setState({navbar:"navbar"})
            document.getElementById("lower-container").style.display = "flex";

        }
    }
    constructor(props){
        super(props);
        this.state={
            navbar:'navbar'
        }
        this.myFunction=this.myFunction.bind(this);
    }

    render() {
                return (
            <div className={this.state.navbar}>
                <div className="logo">
                     <a>
                      <img
                        src="/images/nimap-logo1.png" alt="plus" height="40px"
                        style={{ opacity: "1" }} >
                     </img>
                    </a>
                </div>

                <div className="navbar-inner-left">
                    <ul className="container">
                        <li ><a to="/">Jobs</a></li>
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
                                <option value="mercedes">Nimap Infotech</option>
                                <option value="audi">Nimap Infotech</option>
                                <option value="saab">Nimap Infotech</option>
                                <option value="mercedes">Nimap Infotech</option>
                                <option value="audi">Nimap Infotech</option>
                            </select>
                        </li>

                        <li>
                            <a to="/">
                            <img
                                src="/images/notification.png" alt="plus" height="20px"
                                style={{ opacity: "0.9" }} >

                            </img>
                            </a>
                            </li>

                        <li>
                            <a to="/">
                                <img
                                src="/images/settings-work-tool.png" alt="plus" height="20px"
                                style={{ opacity: "0.9" }} >
                            </img>
                            </a>
                            </li>
                    </ul>
                </div>

                <div className="hamburger-icon" onClick={this.myFunction}>
                   {this.state.navbar==='navbar' ? 
                   (<i className="fa fa-bars" ></i>)
                :<i class="fa fa-times" aria-hidden="true"></i>}
                </div>

            </div>
        )
    }
}

export default Navbar;



