import React, { Component } from 'react'
import RegisterModal from "./RegisterModal"

export default class ModalContainer extends Component {
    render() {
        return (
            <div className="modal" id="loginModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">

                    {/* Display Login/Register/Password Reset modal content */}
                        <RegisterModal />

                    </div>
                </div>
            </div>

        )
    }
}
