import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handelSubmit}>

                    <label>email</label>
                    <input id="email" type="text" onChange={this.props.handleEmail} />
                    <label>title</label>
                    <input id="title" type="text" onChange={this.props.handleTitle} />
                    <label> description</label>
                    <input id="description" type="text" onChange={this.props.handleDescription} />
                    <label>status</label>
                    <input id="status" type="text" onChange={this.props.handleStatus} />
                    <input type="submit" value="ceate" />
                </form>

            </div>
        )
    }
}

export default Form
