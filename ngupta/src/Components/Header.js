import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header class="masthead d-flex">
        <div class="container text-right my-auto">
          <div className="row">
            <div className="col" />
            <div className="col" />
            <div className="col">
            <h3 class="name">Nikhil Gupta</h3>
            <h6 class="subname">
              Full Stack <b>Web Developer</b> and <b>ML</b> Enthusiast
            </h6>
          </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
