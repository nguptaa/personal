import React from "react";
import "./Workexp.css";

class Workexp extends React.Component {
  render() {
    return (
      <div>
        <section class="work-experience">
          <div class="parallax2 mb-5">
            <span>Work Experience</span>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="main-timeline2">
                  <div class="timeline2">
                    <a
                      href="https://kossiitkgp.org/public-files/KWoC/2018-Certificates/KWoC18-Nikhil%20Gupta.pdf"
                      target="_blank"
                      class="timeline2-content"
                    >
                      <div class="timeline2-icon">
                        <i class="fa fa-globe" />
                      </div>
                      <div class="inner-content">
                        <h3 class="title">
                          Winter Intern at KWoC, IIT Kharagpur
                        </h3>
                        <p class="description">
                          Contributed in developing student information portal
                          of National Institute of Technology, Durgapur. Also
                          added continuous integration and codecoverage in the
                          github repository for better integration.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="timeline2">
                    <a href="" class="timeline2-content">
                      <div class="timeline2-icon">
                        <i class="fa fa-users" />
                      </div>
                      <div class="inner-content">
                        <h3 class="title">
                          Web Application Developer, Propelld Tech
                        </h3>
                        <p class="description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ad adipisci culpa dolore explicabo fuga pariatur
                          gjkfdgj quis reprehenderit tenetur vel!
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Workexp;
