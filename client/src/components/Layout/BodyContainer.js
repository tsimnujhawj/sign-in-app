import React, { Component } from "react"
import Content from "../Content/Content"
import Register from "../Modals/Register"

export default class BodyContainer extends Component {
render() {
    return (
        <div>
            <Content />
            <Register />
        </div>
    )
}
}
