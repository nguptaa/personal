import React from "react";
import "./Workexp.css";

class Workexp extends React.Component {
  render() {
    return (
      <div>
        <section className="work-experience">
          <div className="parallax2 mb-5">
            <span>Work Experience</span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-timeline2">
                  <div className="timeline2">
                    <a
                      href="https://kossiitkgp.org/public-files/KWoC/2018-Certificates/KWoC18-Nikhil%20Gupta.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline2-content"
                    >
                      <div className="timeline2-icon">
                        <i className="fa fa-globe" />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">
                          Winter Intern at KWoC, IIT Kharagpur
                        </h3>
                        <p className="description">
                          Contributed in developing student information portal
                          of National Institute of Technology, Durgapur. Also
                          added continuous integration and codecoverage in the
                          github repository for better integration.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="timeline2">
                    <a
                      href="https://kossiitkgp.org/public-files/KWoC/2018-Certificates/KWoC18-Nikhil%20Gupta.pdf"
                      className="timeline2-content"
                    >
                      <div className="timeline2-icon">
                        <i className="fa fa-users" />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">
                          Web Application Developer, Propelld Tech
                        </h3>
                        <p className="description">
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
