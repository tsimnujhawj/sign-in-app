import React, { Component } from 'react'
import LoginModal from "./LoginModal"
import RegisterModal from "./RegisterModal"

export default class ModalContainer extends Component {
    constructor(props)
    {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="modal" id="loginModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">

                    {/* Display Login/Register/Password Reset modal content */}
                    {this.props.buttonName === "Login" ? <LoginModal /> : <RegisterModal />}

                    </div>
                </div>
            </div>

        )
    }
}
