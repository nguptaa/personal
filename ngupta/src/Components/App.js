import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Workexp from "./Workexp";
import Resume from "./Resume";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Workexp />
        <Resume />
      </div>
    );
  }
}

export default App;
