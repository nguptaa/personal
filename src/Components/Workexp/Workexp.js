import React from "react";
import "./Workexp.css";
import Container from "@material-ui/core/Container";
// import RippleEffect from "./RippleEffect";
import Typography from "@material-ui/core/Typography";

export default function Workexp() {
  return (
    <section class="work-experience mb-5" id="workexp">
      <Container maxWidth="md">
        <Typography style={{ color: '#eb655b', textAlign: 'center' }} variant="h5" gutterBottom>
          Work Experience
        </Typography>
        <div class="card-deck my-auto">
          <div class="card bounce-in">
            <div class="card-img-block">
              <img
                class="card-img-top"
                src={require("../../Static/kwoc.jpg")}
                alt="kwoc"
              />
            </div>
            <div class="card-body pt-0">
              <h5 class="card-title">Winter Intern at KWoC, IIT Kharagpur </h5>
              <p class="card-text">
                Contributed in developing student information portal of National
                Institute of Technology, Durgapur. Also added continuous
                integration and codecoverage in the github repository for better
                integration.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-img-block">
              <img
                class="card-img-top"
                src={require("../../Static/propelld.jpg")}
                alt="propelld"
              />
            </div>
            <div class="card-body pt-0">
              <h5 class="card-title">Summer Intern at Propelld, Bangalore</h5>
              <p class="card-text">
                Created a complete well documented service called cache service
                and integrated it with frontend for visualization. Also
                integrated consul services for health checkup and service
                discovery in few services used, and remotely contributed in few
                API's documentation of different services used.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}