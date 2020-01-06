import React, { Component } from 'react';
import {  Button, CardBody, Card } from 'reactstrap';

class Status extends Component{
    onToggle(){
         this.setState({
             isOpen:!this.state.isOpen
         })
    }
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        }
        this.onToggle=this.onToggle.bind(this)
    }
    render(){
        return (
            <div className="accordian">
              <div className="accordian-title" onClick={this.onToggle}>Status
              <div className="accordian-image"><img
                                src="/images/plus.png" alt="plus" height="20px"
                                style={{ opacity: "1" }} >

                            </img></div></div>
              {this.state.isOpen &&  
               <Card className="accordian-card">
                  <CardBody className="accordian_card-body">
                     <ul >
                         <li><span><input type="checkbox"></input></span>Applied<span>  xx</span></li>
                         <li><span><input type="checkbox"></input></span>In Process<span>  xx</span></li>
                         <li><span><input type="checkbox"></input></span>Shortlisted<span>  xx</span></li>
                         <li><span><input type="checkbox"></input></span>Can consider<span>  xx</span></li>
                         <li><span><input type="checkbox"></input></span>On Hold<span>  xx</span></li>
                         <li><span><input type="checkbox"></input></span>Offered<span>  xx</span></li>
                         <li><span><input type="checkbox"></input></span>Rejected<span>  xx</span></li>
                         <li><span><input type="checkbox"></input></span>Not Interviewed<span>  xx</span></li>
                     </ul>
                  </CardBody>
                </Card>}
            </div>
          );
    }
}

export default Status;
