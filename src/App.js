import React, { Component } from 'react'
import BestBooks from './BestBooks'
import axios from 'axios';
import Header from './Header'
import Footer from './Footer';
import { Form } from 'react-bootstrap';
import Formbook from './Formbook'


export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      title: "",
      description: "",
      status: "",
books:{},
      data: []
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:8000/book').then(res => { this.setState({ data: res.data }) })
  }

  handlebookInput=e=>{
  
  }

  handelSubmit = (e) => {
    const body = {
      email : e.target.email.value,
      title : e.target.title.value,
       description :e.target.description.value,
       status :e.target.status.value
    }
    axios.post(`http://localhost:8000/create-book`, body).then(axiosResponse => {
    // console.log(axiosResponse.data);
    this.state.books.push(axiosResponse.data);
    this.setState({
      data: this.state.books
    
    });
    console.log(this.state.books);

  }).catch(error => alert(error));
       


  }
  handleDelete=(id)=>{
    let bookid=id;
    let config={
        method:"DELETE",
        baseURL:"http://localhost:8000",
        url:`/delete-book/${bookid}`,
  
    }
  
    axios(config).then(response=>{
      this.setState({
        data:response.data
      })
    })
      
}

  render() {
    return (
      <div>

        <Header />
        <Formbook onSubmit={this.state.handelSubmit} onChange={this.state.handlebookInput}/>

        {console.log(this.state.data, "fron 1")}
        <BestBooks data={this.state.data}  handleDelete={this.handleDelete}/>
        <Footer />
      </div>
    )
  }
}

export default App



