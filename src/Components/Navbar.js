import React from "react";
import "./Navbar.css";
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
              <a href="#page-top">Home</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#about">About</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#projects">Projects</a>
            </li>
            <li className="sidebar-nav-item">
              {/* <a href="#workexp"> */}
              <AnchorLink offset="100" href="#workexp">
                Work <br />
                Experience
              </AnchorLink>
              {/* </a> */}
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
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
