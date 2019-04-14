import React, { Component } from 'react'

export default class LoginModal extends Component {
  render() {
    return (
      <div>

            <div className="pt-3 grey lighten-2">
                <button className="close" data-dismiss="modal">&times;</button>
                <div className="row d-flex justify-content-start">
                    <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">Login</h3>
                </div>
            </div>

            <div className="card-body mx-4 mt-4">
                <div className="md-form">
                    <input type="text" id="inputUserName" className="form-control" />
                    <label htmlFor="Form-email4">Your email</label>
                </div>
    
                <div className="md-form pb-3">
                    <input type="password" id="inputPassword" className="form-control" />
                    <label htmlFor="Form-pass4">Your password</label>
                    <p className="font-small grey-text d-flex justify-content-end">Forgot <a href="#" className="dark-grey-text font-weight-bold ml-1"> Password?</a></p>
                </div>

                <div className="text-center mb-4">
                    <button type="button" className="btn btn-primary btn-block z-depth-2" id="login-submit" data-dismiss="modal">Login</button>
                </div>
                <p className="font-small grey-text d-flex justify-content-center">Don't have an account? <a href="#" className="dark-grey-text font-weight-bold ml-1"> Sign up</a></p>
            </div>

      </div>
    );
  }
}
