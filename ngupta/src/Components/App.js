import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Workexp from "./Workexp";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Workexp />
      </div>
    );
  }
}

export default App;
