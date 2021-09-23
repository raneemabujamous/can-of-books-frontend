import React, { Component } from 'react'
import {Row,Card,Col,Carousel} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'bootstrap'
export class BestBooks extends Component {
    constructor(props) {
        super(props);
      }
    
    render() 
        {          
return(  
    
    <Carousel>
    {this.props.bookThatshow.map((e) => (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.marketplace.org/wp-content/uploads/2021/01/Books_New-e1611252343470.jpg?fit=740%2C494"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{e.title}</h3>
          <p> {e.description}</p>
          <p>{e.status}</p>
    <button onClick={()=>this.props.handleDelete(e._id)}>Delete</button>
    <button onClick={()=>this.props.handleUpdate(e._id,e.title,e.email,e.status,e.description )}>update</button>

        </Carousel.Caption>
      </Carousel.Item>))}
    </Carousel>
 
)
    }
}
export default BestBooks


