import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import $ from "jquery";

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
