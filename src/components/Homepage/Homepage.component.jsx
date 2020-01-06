import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar.components';
import LowerNavbar from '../LowerNavbar.component';

import Searchbox from './Searchbox.component';
import Stages from './Stages.component';
import Events from './Events.component';

import Dropdown from './Dropdown.component'
import Source from './Source.component';
import Status from './Status.component';
import Tags from './Tags.component';
import Details from './Details.component';
import FilterButton from './FilterButton'

import '../../../src/main.css'

class Homepage extends Component {
    render() {
        const dropdown = {
            
                width: "205px",
                height: "35px",
                border: "0",
                fontSize: "14px",
                fontWeight: "inherit",
            
          };
        return (
            <div className="main-container">

                <Navbar />
                <LowerNavbar />

                <div className="lower-container">
                    <div className="lower-container-left">
                        <Searchbox />
                        <Stages />
                        <Events />
                    </div>


                    <div className="lower-container-middle">
                        <Details />
                    </div>


                    <div className="lower-container-right">
                        < Dropdown />
                        <Status />
                        <Source />
                        <Tags />
                        <FilterButton />
                    </div>

                </div>
            </div>
        )
    }
}

export default Homepage;