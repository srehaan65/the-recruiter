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
        <div>
          <Button color="primary" onClick={this.onToggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
          {this.state.isOpen &&   <Card>
              <CardBody>
              Anim pariatur cliche reprehenderit,
               enim eiusmod high life accusamus terry richardson ad squid. Nihil
               anim keffiyeh helvetica, craft beer labore wes anderson cred
               nesciunt sapiente ea proident.
              </CardBody>
            </Card>}
        </div>
      );
    }
}

export default Tags;
