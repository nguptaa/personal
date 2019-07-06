import React from "react";
import "./Footer.css";

class Projects extends React.Component {
  render() {
    return (
      <footer class="footer text-center">
        <div class="container">
          <hr />
          <p class="mb-0" style={{ color: "#EB655B" }}>
            <i className="code icon" /> with <i className="heart icon" /> by{" "}
            <i className="react icon" /> and Nikhil Gupta !
          </p>
        </div>
      </footer>
    );
  }
}
export default Projects;
