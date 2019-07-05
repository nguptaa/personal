import React from "react";
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div>
        <section class="aboutme" id="about">
          <div class="container text-center">
            <i class="fas fa-user fa-4x" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam,
              <br /> quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              <br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
