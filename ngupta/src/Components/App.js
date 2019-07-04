import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
// import About from "./About";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        {/* <About /> */}
      </div>
    );
  }
}

export default App;
