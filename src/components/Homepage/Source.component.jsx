import React, { Component } from 'react';
import {  Button, CardBody, Card } from 'reactstrap';

class Source extends Component{
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
              <div className="accordian-title" onClick={this.onToggle}>Source
              <div className="accordian-image"><img
                                src="/images/plus.png" alt="plus" >

                            </img></div></div>
              {this.state.isOpen &&  
               <Card className="accordian-card">
                  <CardBody className="accordian_card-body">
                     <ul >
                         <li><span><input type="checkbox"></input></span>Indeed Today<span>  xx</span></li>
                         <li><span><input type="checkbox"></input></span>Naukri<span>  xx</span></li>
                         <li><span><input type="checkbox"></input></span>Wift<span>  xx</span></li>
                         <li><span><input type="checkbox"></input></span>Talent path<span>  xx</span></li>
                         <li><span><input type="checkbox"></input></span>Alpha Solution<span>  xx</span></li>
                     </ul>
                  </CardBody>
                </Card>}
            </div>
          );
    }
}

export default Source;
