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
      bookThatshow: [],
      showUpdate: false,
      id: ""

    }
  }

  componentDidMount = () => {
    axios.get(`https://boooraneem.herokuapp.com/book`).then(res => { this.setState({ bookThatshow: res.data }) })
    
  }

  handelSubmit = (e) => {
    e.preventDefault()
console.log('faer')
    let config = {
      method: "POST",
      // baseURL: process.env.REACT_APP_HORKO,
      baseURL: "http://localhost:8000",

      url: '/create-book',
      data: {
        email: this.state.email,
        title: this.state.title,
        description: this.state.description,
        status: this.state.status
      }
    }
    axios(config).then(res => {
      console.log(res.data)
      this.setState({
        bookThatshow: res.data
      })
      console.log(this.state.email,"Frompost")
    })
    
  }

  // }


  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  handleTitle = (e) => {
    this.setState({ title: e.target.value })

  }
  handleDescription = (e) => {
    this.setState({ description: e.target.value })

  }
  handleStatus = (e) => {
    this.setState({ status: e.target.value })

  }

  handleUpdate = (id, title, email, status, description) => {
    this.setState({
      title: title,
      email: email,
      status: status,
      description: description,
      id: id,
      showUpdate: true
    })
    console.log(id, title)
  }


  handleDelete = (id) => {
    let bookid = id;
    console.log(bookid)

    let config = {
      method: "DELETE",

      baseURL: "http://localhost:8000",
      // baseURL: `${process.env.REACT_APP_HORKO}`,
      url: `/delete-book/${bookid}`,

    }

    axios(config).then(response => {
      this.setState({
        bookThatshow: response.data
      })
    })

  }

  handleUpdateForm = () => {
    let config = {
      method: "PUT",
      // baseURL: process.env.REACT_APP_HORKO,
      baseURL: "http://localhost:8000",
      url: `/update-book/${this.state.id}`,
      data: {
        status: this.state.status,
        email: this.state.email,
        description: this.state.description,
        title: this.state.title,

      }
    }
    axios(config).then(res => {
      this.setState({
        bookThatshow: res.data
      })
      console.log(res.data)
    });

  }

  render() {
    return (
      <div>

        <Header />
        {
          !this.state.showUpdate ?
            <Formbook handelSubmit={this.handelSubmit} handleEmail={this.handleEmail}
              handleStatus={this.handleStatus} handleDescription={this.handleDescription}
              handleTitle={this.handleTitle}
            /> :
            <form onSubmit={this.handleUpdateForm}>
              <input
                type="texts"
                onChange={this.handleEmail}
                value={this.state.email}
              />
              <input
                type="texts"
                value={this.state.title}
                onChange={this.handleTitle} />
              <input
                type="texts"
                value={this.state.description}
                onChange={this.handleDescription} />

              <input
                type="texts"
                value={this.state.status}

                onChange={this.handleStatus} />
              <input type="submit" value="update" />
            </form>

        }
        {console.log(this.state.bookThatshow, "fron 1")}
        <BestBooks bookThatshow={this.state.bookThatshow} handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate} />
      </div>
    )
  }
}

export default App



