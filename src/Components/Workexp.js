import React from "react";
import "./Workexp.css";
import Container from "@material-ui/core/Container";
// import RippleEffect from "./RippleEffect";

export default function Workexp() {
    return (
      <section class="work-experience mb-5" id="workexp">
        <div class="parallax2 mb-5">
          <span>Work Experience</span>
        </div>
        <Container maxWidth="md">
          <div class="card-deck my-auto">
            <div class="card bounce-in">
              <div class="card-img-block">
                <img
                  class="card-img-top"
                  src={require("../Static/kwoc.jpg")}
                  alt="kwoc"
                />
              </div>
              <div class="card-body pt-0">
                <h5 class="card-title">
                  Winter Intern at KWoC, IIT Kharagpur{" "}
                </h5>
                <p class="card-text">
                  Contributed in developing student information portal of
                  National Institute of Technology, Durgapur. Also added
                  continuous integration and codecoverage in the github
                  repository for better integration.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-img-block">
                <img
                  class="card-img-top"
                  src={require("../Static/propelld.jpg")}
                  alt="propelld"
                />
              </div>
              <div class="card-body pt-0">
                <h5 class="card-title">Summer Intern at Propelld, Bangalore</h5>
                <p class="card-text">
                  Created a complete well documented API from scratch for cache
                  service and also integrated it with frontend for
                  visualization. Also wrote an API for health checkup and
                  service discovery, and remotely contributed in few API’s
                  documentation of different services used.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
}

