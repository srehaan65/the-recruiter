import React,{Component} from 'react';
import DetailsHeading from './DetailsHeading';
import DetailsElement from './DetailsElement.component'

class Details extends Component{
    render(){
        let arr=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
        return(
            <div className="details-container">
                <DetailsHeading />
                {arr.map((a)=><DetailsElement />)}
            </div>
        )
    }
}

export default Details ;