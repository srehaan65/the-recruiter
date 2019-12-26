import React,{Component} from 'react';

class LowerNavbar extends Component{
    render(){
        return(
           <div className="menubar">
                <div className="menubar-inner-left">
                    <ul className="container">
                        <li><a to="/">Job dropdown</a></li>
                        <li><a to="/">Company name</a></li>
                    </ul>
            </div>
            <div className="menubar-inner-right">
            <ul className="container">
                <li><a to="/">Add Candidates</a></li>
                <li><a to="/">Edit</a></li>
                <li><a to="/">Job menu dropdown</a></li>
                <li><a to="/">Add new JOb</a></li>
            </ul>
    </div>
           </div>
        )
    }
}

export default LowerNavbar;