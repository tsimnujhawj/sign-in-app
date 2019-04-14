import React, { Component } from 'react'

export default class OpenLoginBtn extends Component {
    constructor(props)
    {
        super(props)
        this.state = {

        }
    }
  render() {
    return (
        <div style={{textAlign: "center"}}>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModal">
                {this.props.buttonName}
            </button>
        </div>
    )
  }
}
