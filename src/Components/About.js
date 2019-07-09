import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div>
        <section className="aboutme" id="about">
          <Container>
            <i className="fas fa-user fa-4x" style={{ color: "#EB655B" }} />
            <Typography variant="body1" gutterBottom>
              I am a Full Stack developer preferably Back End with
              industry experience
              <br /> building websites and web applications. I have professional
              <br /> experience working with nodeJS, ReactJS and DevOps. I also
              have
              <br /> experience working with Python, C/C++, HTML, CSS,
              JavaScript, PHP, VCS/Git, BootStrap.
              <br /> My field of interest includes but not limited to Web
              Development, Microservices, Scalability, Machine Learning/AI, Data
              Science.
            </Typography>
          </Container>
        </section>
      </div>
    );
  }
}

export default About;
