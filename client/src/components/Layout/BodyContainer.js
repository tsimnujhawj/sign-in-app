import React, { Component } from "react"
import Content from "../Content/Content"
import RegisterModal from "../Modals/RegisterModal"

export default class BodyContainer extends Component {
render() {
    return (
        <div>
            <Content />
            <RegisterModal />
        </div>
    )
}
}
