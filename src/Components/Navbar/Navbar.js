import React from "react";
import "./Navbar.css";
import Scrollchor from "react-scrollchor";
import $ from "jquery";

class Navbar extends React.Component {
  componentDidMount() {
    // Closes the sidebar menu
    $(".menu-toggle").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
      $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
        "fa-bars fa-times"
      );
      $(this).toggleClass("active");
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $("#sidebar-wrapper").click(function() {
      $("#sidebar-wrapper").removeClass("active");
      $(".menu-toggle").removeClass("active");
      $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
        "fa-bars fa-times"
      );
    });
  }
  render() {
    return (
      <div>
        <a className="menu-toggle rounded" href="https://ngupta.me">
          <i className="fas fa-bars" />
        </a>
        <nav id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <Scrollchor to="#page-top">Home</Scrollchor>
            </li>
            <li className="sidebar-nav-item">
              <Scrollchor to="#about">About</Scrollchor>
            </li>
            <li className="sidebar-nav-item">
              <Scrollchor to="#projects">Projects</Scrollchor>
            </li>
            <li className="sidebar-nav-item">
              <Scrollchor to="#workexp">
                Work <br />
                Experience
              </Scrollchor>
            </li>
            <li className="sidebar-nav-item">
              <a
                href="https://medium.com/@nguptaa/kwoc-kharagpur-winter-of-code-final-report-6d9d73ee7428"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li className="sidebar-nav-item">
              <Scrollchor to="#contact">Contacts</Scrollchor>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
