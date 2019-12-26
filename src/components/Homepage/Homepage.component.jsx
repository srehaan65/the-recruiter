import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar.components';
import LowerNavbar from '../LowerNavbar.component';
import Stages from './Stages.component';
import Events from './Events.component';
import Source from './Source.component';
import Status from './Status.component';
import Tags from './Tags.component';
import Details from './Details.component'


class Homepage extends Component {
    render() {
        return (
            <div className="main-container">

                <Navbar />
                <LowerNavbar />

                <div className="lower-container">
                    <div className="lower-container-left">
                        <Stages />
                        <Events />
                    </div>


                    <div className="lower-container-middle">
                        <Details />
                    </div>


                    <div className="lower-container-right">
                        <Status />
                        <Source />
                        <Tags />
                    </div>

                </div>
            </div>
        )
    }
}

export default Homepage;