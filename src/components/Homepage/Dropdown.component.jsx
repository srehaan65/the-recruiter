import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="lower-container-right-dropdown">
                
                <select >
                    <option value="volvo"> Sort by:Date Applied</option>
                    <option value="saab"> Sort by:Date Updated</option>
                    <option value="mercedes"> Sort by:Status</option>
                    <option value="audi"> Sort by:HR</option>
                    <option value="saab"> Sort by:Agency</option>
                    <option value="mercedes">Sort by:Skills</option>
                    <option value="audi">Sort by:Experience</option>
                </select>
            </div>
        )
    }
}

export default Dropdown ;
