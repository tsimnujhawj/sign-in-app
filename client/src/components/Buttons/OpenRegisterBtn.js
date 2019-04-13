import React, { Component } from 'react'

export default class OpenRegisterBtn extends Component {
  render() {
    return (
        <div style={{textAlign: "center"}}>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModal">
                Login
            </button>
        </div>
    )
  }
}
