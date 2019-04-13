import React, { Component } from 'react';
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import BodyContainer from  "./components/Layout/BodyContainer"
import "./assets/css/bootstrap.css"
import "./assets/css/styles.css"

class App extends Component {
  render() {
    return (
        <div className="Site">

            <div className="Site-content">
                <Header />
                <BodyContainer />
            </div>

            <Footer />
        </div>
    );
  }
}

export default App;
