import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./Footer.css";

class Projects extends React.Component {
  render() {
    return (
      <footer className="footer text-center">
        <Container>
          <hr />
          <Typography
            className="mb-4"
            id="contact"
            variant="h5"
            style={{ color: "#767676" }}
            gutterBottom
          >
            Lets stay connected !
          </Typography>
          <ul className="horizontal mb-4">
            <li>
              <a
                href="https://www.facebook.com/nguptaa183"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="social fab fa-facebook-f fa-2x"
                  style={{ color: "#3b5999" }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/aayannikhil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="social fab fa-instagram fa-2x"
                  style={{ color: "#cd486b" }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ngupta183"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="social fab fa-twitter fa-2x"
                  style={{ color: "#55acee" }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nikhil-gupta-aab490140"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="social fab fa-linkedin fa-2x"
                  style={{ color: "#0077B5" }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/nguptaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="social fab fa-github fa-2x"
                  style={{ color: "#333" }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.quora.com/profile/Nikhil-Gupta-397"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="social fab fa-quora fa-2x"
                  style={{ color: "#b92b27" }}
                />
              </a>
            </li>
            <li>
              <a
                href="/cdn-cgi/l/email-protection#4729203237332626767f7407202a262e2b6924282a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="social fas fa-envelope fa-2x"
                  style={{ color: "#FF8800" }}
                />
              </a>
            </li>
          </ul>
          <Typography variant="body1" style={{ color: "#f44336" }} gutterBottom>
            <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
            <i className="fab fa-react " /> and Nikhil Gupta
          </Typography>
        </Container>
      </footer>
    );
  }
}
export default Projects;
