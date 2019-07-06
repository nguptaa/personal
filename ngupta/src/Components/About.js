import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div>
        <section class="aboutme" id="about">
          <div class="container text-center">
            <i class="fas fa-user fa-4x" style={{ color: "#EB655B" }} />
            <p>
              I am a Full Stack developer preferably Back End with industry
              experience
              <br /> building websites and web applications. I have professional
              <br /> experience working with nodeJS, ReactJS and DevOps. I also
              have
              <br /> experience working with Python, C/C++, HTML, CSS,
              JavaScript, PHP, VCS/Git, BootStrap.
              <br /> My field of interest includes but not limited to Web
              Development, Microservices, Scalability, Machine Learning/AI, Data
              Science.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
