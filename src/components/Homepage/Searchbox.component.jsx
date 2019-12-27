import React,{Component} from 'react';

class Searchbox extends Component{
    render(){
        return(
            <div className="searchbox">
                <input type="text" placeholder="Search Candidates"></input>
            </div>
        )
    }
}

export default Searchbox;