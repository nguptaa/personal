import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Workexp from "./Workexp/Workexp";
import Resume from "./Resume/Resume";
import Footer from "./Footer/Footer";

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
        <Footer />
      </div>
    );
  }
}

export default App;
