import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="masthead d-flex">
        <div className="container text-right my-auto">
          <div className="row">
            <div className="col" />
            <div className="col">
              <h3 className="name">Nikhil Gupta</h3>
              <h6 className="subname">
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
