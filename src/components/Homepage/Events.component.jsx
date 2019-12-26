import React, { Component } from 'react';
import {  Button, CardBody, Card } from 'reactstrap';

class Events extends Component{
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
          <div className="accordian-title"  onClick={this.onToggle}>Events</div>
          {this.state.isOpen &&   
          <Card  className="accordian-card">
            <CardBody className="accordian_card-body">
                 <ul>
                     <li>Show All <span><input type="radio"></input></span><span>  xx</span></li>
                     <li>Scheduleds<span><input type="radio"></input></span><span>  xx</span></li>
                     <li>No Events<span><input type="radio"></input></span><span>  xx</span></li>
                 </ul>
              </CardBody>
            </Card>}
        </div>
      );
    }
}

export default Events;
