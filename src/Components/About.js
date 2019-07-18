import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./About.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500
  }
});

class About extends React.Component {
  render() {
    return (
      <section className="aboutme mb-5">
        <div className="container">
          <Grid container spacing={2} className="xs-column-reverse">
            <img
              src={require("../Static/parallax-9.png")}
              class="single-doodle one"
              alt=""
            />
            <Grid item sm={12} md={6} className="my-auto">
              <div className={useStyles.root}>
                <Typography
                  style={{ color: "#eb655b" }}
                  variant="h5"
                  gutterBottom
                >
                  About Me
                </Typography>
                <Typography variant="body1" className="text-justify" gutterBottom>
                  I am a Full Stack developer preferably Back End with industry
                  experience building websites and web applications. I have
                  professional experience working with nodeJS, ReactJS and
                  DevOps. I also have experience working with Python, C/C++,
                  HTML, CSS, JavaScript, PHP, VCS/Git, BootStrap. My field of
                  interest includes but not limited to Web Development,
                  Microservices, Scalability, Machine Learning/AI, Data Science.
                </Typography>
              </div>
            </Grid>
            <Grid item sm={12} md={6} className="my-auto">
              <img
                src={require("../Static/aboutme.png")}
                alt=""
                className="img-fluid"
              />
            </Grid>
          </Grid>
          </div>
        {/* <div class="doodle-parallax">
            <img
              src={require("../Static/parallax-9.png")}
              class="single-doodle one"
              alt=""
            />
            <img
              src={require("../Static/parallax-10.png")}
              class="single-doodle two"
              alt=""
            />
          </div> */}
      </section>
    );
  }
}

export default About;
