import React, { Component } from 'react';
import {  Button, CardBody, Card } from 'reactstrap';

class Stages extends Component{
    onToggle(){
         this.setState({
             isOpen:!this.state.isOpen
         })
    }
    constructor(props){
        super(props);
        this.state={
            isOpen:true
        }
        this.onToggle=this.onToggle.bind(this)
    }
    render(){
    return (
        <div className="accordian">
          <div className="accordian-title" onClick={this.onToggle}>Stages</div>
          {this.state.isOpen &&  
           <Card className="accordian-card">
              <CardBody className="accordian_card-body">
                 <ul >
                     <li>All Candidates<span>  xx</span></li>
                     <li>New Candidates<span>  xx</span></li>
                     <li>Machine Test<span>  xx</span></li>
                     <li>Technical Interview<span>  xx</span></li>
                     <li>Final Interview<span>  xx</span></li>
                     <li>Completed<span>  xx</span></li>
                 </ul>
              </CardBody>
            </Card>}
        </div>
      );
    }
}

export default Stages;
