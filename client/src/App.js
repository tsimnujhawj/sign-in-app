import React, { Component } from 'react';
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import BodyContainer from  "./components/Layout/BodyContainer"

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <BodyContainer />
            <Footer />
        </div>
    );
  }
}

export default App;
