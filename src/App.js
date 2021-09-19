import React, { Component } from 'react'
import BestBooks from './BestBooks'
import axios from 'axios';
import Header from './Header'
import Footer from './Footer';

export class App extends Component {
  constructor(props){
    super(props)
    this.state={
data:[]
    }
  }

  componentDidMount=()=>{
    axios.get('http://localhost:8000/book?id=61478c33946de8482ca91069').then(res=>{this.setState({ data : res.data.books})})
  }
  render() {
    return (
      <div>

        <Header/>
        {console.log(this.state.data,"fron 1")}
        <BestBooks data={this.state.data} />
        <Footer/>
      </div>
    )
  }
}

export default App



