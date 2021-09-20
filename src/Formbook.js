import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handelSubmit}>

                    <label>email</label>
                    <input id="email" type="text"  onChange={this.props.handlebookInput}/>
                    <label>title</label>
                    <input id="title" type="text"  onChange={this.props.handlebookInput}/>
                    <label> description</label>
                    <input id="description" type="text" onChange={this.props.handlebookInput} />
                    <label>status</label>
                    <input id="status" type="text" onChange={this.props.handlebookInput} />
                    <input type="submit" value="create book"/>
                </form>
                
            </div>
        )
    }
}

export default Form
