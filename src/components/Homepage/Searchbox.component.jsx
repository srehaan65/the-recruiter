import React, { Component } from 'react';

class Searchbox extends Component {
    render() {
        return (
            <div className="searchbox">
                <input type="text" placeholder="Search Candidates"></input>
                <div className="searchbox-icon">
                    <img
                        src="/images/search.png" alt="plus" height="15px"
                        style={{ opacity: "1" }} >
                    </img>
                </div>

            </div>
        )
    }
}

export default Searchbox;