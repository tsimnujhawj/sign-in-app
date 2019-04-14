import React, { Component } from "react"
import Content from "../Content/Content"
import ModalContainer from "../Modals/ModalContainer"

export default class BodyContainer extends Component {
render() {
    return (
        <div>
            <Content />
            <ModalContainer />
        </div>
    )
}
}
