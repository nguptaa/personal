import React from "react";
import "./Footer.css";

class Projects extends React.Component {
  render() {
    return (
      <footer class="footer text-center">
        <div class="container">
          <hr />
          <h5 class="mb-4" style={{ color: "#767676" }}>
            Lets stay connected !
          </h5>
          <p class="small mb-0" style={{ color: "#EB655B" }}>
            <ul class="nav justify-content-center mb-5">
              <li class="nav-item social">
                <a
                  class="nav-link"
                  href="https://www.facebook.com/nguptaa183"
                  target="_blank"
                >
                  <i class="social fab fa-facebook-f fa-2x" />
                </a>
              </li>
              <li class="nav-item social">
                <a
                  class="nav-link"
                  href="https://www.instagram.com/aayannikhil/"
                  target="_blank"
                >
                  <i class="social fab fa-instagram fa-2x" />
                </a>
              </li>
              <li class="nav-item social">
                <a
                  class="nav-link"
                  href="https://twitter.com/ngupta183"
                  target="_blank"
                >
                  <i class="social fab fa-twitter fa-2x" />
                </a>
              </li>
              <li class="nav-item social">
                <a
                  class="nav-link"
                  href="https://www.linkedin.com/in/nikhil-gupta-aab490140"
                  target="_blank"
                >
                  <i class="social fab fa-linkedin fa-2x" />
                </a>
              </li>
              <li class="nav-item social">
                <a
                  class="nav-link"
                  href="https://www.github.com/nguptaa"
                  target="_blank"
                >
                  <i class="social fab fa-github fa-2x" />
                </a>
              </li>
              <li class="nav-item social">
                <a
                  class="nav-link"
                  href="https://www.quora.com/profile/Nikhil-Gupta-397"
                  target="_blank"
                >
                  <i class="social fab fa-quora fa-2x" />
                </a>
              </li>
              <li class="nav-item social">
                <a
                  class="nav-link"
                  href="/cdn-cgi/l/email-protection#4729203237332626767f7407202a262e2b6924282a"
                  target="_blank"
                >
                  <i class="social fas fa-envelope fa-2x" />
                </a>
              </li>
            </ul>
            <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
            <i className="fab fa-react " /> and Nikhil Gupta
          </p>
        </div>
      </footer>
    );
  }
}
export default Projects;
