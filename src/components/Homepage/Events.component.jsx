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
                     <li><span><input type="radio"></input></span>Show All <span>  xx</span></li>
                     <li><span><input type="radio"></input></span>Scheduleds<span>  xx</span></li>
                     <li><span><input type="radio"></input></span>No Events<span>  xx</span></li>
                 </ul>
              </CardBody>
            </Card>}
        </div>
      );
    }
}

export default Events;
