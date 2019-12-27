import React, { Component } from 'react';
import {  Button, CardBody, Card } from 'reactstrap';

class Tags extends Component{
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
              <div className="accordian-title" onClick={this.onToggle}>Tags</div>
              {this.state.isOpen &&  
               <Card className="accordian-card">
                  <CardBody className="accordian_card-body">
                     <ul >
                         <li><span><input type="checkbox"></input></span>Lorem ipsum<span>  xx</span></li>
                         <li><span><input type="checkbox"></input></span>Lorem ipsum<span>  xx</span></li>
                         <li><span><input type="checkbox"></input></span>Lorem ipsum<span>  xx</span></li>
                         <li><span><input type="checkbox"></input></span>Lorem ipsum<span>  xx</span></li>
                     </ul>
                  </CardBody>
                </Card>}
            </div>
          );
    }
}

export default Tags;
