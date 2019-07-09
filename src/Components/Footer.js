import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "./Footer.css";

const flexContainer = {
  display: "flex",
  flexDirection: "row",
  padding: 0
};

class Projects extends React.Component {
  render() {
    return (
      <footer className="footer text-center">
        <div className="container">
          <hr />
          <h5 className="mb-4" style={{ color: "#767676" }}>
            Lets stay connected !
          </h5>
          <div className="small mb-0" style={{ color: "#EB655B" }}>
            <ul className="nav justify-content-center mb-5">
              <li className="nav-item social">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/nguptaa183"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="social fab fa-facebook-f fa-2x" />
                </a>
              </li>
              <li className="nav-item social">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/aayannikhil/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="social fab fa-instagram fa-2x" />
                </a>
              </li>
              <li className="nav-item social">
                <a
                  className="nav-link"
                  href="https://twitter.com/ngupta183"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="social fab fa-twitter fa-2x" />
                </a>
              </li>
              <li className="nav-item social">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/nikhil-gupta-aab490140"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="social fab fa-linkedin fa-2x" />
                </a>
              </li>
              <li className="nav-item social">
                <a
                  className="nav-link"
                  href="https://www.github.com/nguptaa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="social fab fa-github fa-2x" />
                </a>
              </li>
              <li className="nav-item social">
                <a
                  className="nav-link"
                  href="https://www.quora.com/profile/Nikhil-Gupta-397"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="social fab fa-quora fa-2x" />
                </a>
              </li>
              <li className="nav-item social">
                <a
                  className="nav-link"
                  href="/cdn-cgi/l/email-protection#4729203237332626767f7407202a262e2b6924282a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="social fas fa-envelope fa-2x" />
                </a>
              </li>
            </ul>
            <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
            <i className="fab fa-react " /> and Nikhil Gupta
          </div>
        </div>
      </footer>
    );
  }
}
export default Projects;
