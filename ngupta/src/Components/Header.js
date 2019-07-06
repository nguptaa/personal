import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="masthead">
        <div class="ui two column grid">
          <div class="column" />

          <div class="column">
            <div class="contents text-center">
              <h1 class="ui red inverted header">
                Nikhil Gupta
                <div className="ui grey sub header">
                  Full Stack <b>Web Developer</b> and <b>ML</b> Enthusiast
                </div>
              </h1>
              <div class="ui horizontal list" id="social">
                <a
                  class="item"
                  href="https://www.facebook.com/nguptaa183"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    class="social fab fa-facebook-f fa-2x"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Facebook"
                  />
                </a>
                <a
                  class="item"
                  href="https://www.instagram.com/aayannikhil/"
                  target="_blank"
                >
                  <i
                    class="social fab fa-instagram fa-2x"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Instagram"
                  />
                </a>
                <a
                  class="item"
                  href="https://twitter.com/ngupta183"
                  target="_blank"
                >
                  <i
                    class="social fab fa-twitter fa-2x"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Twitter"
                  />
                </a>
                <a
                  class="item"
                  href="https://www.linkedin.com/in/nikhil-gupta-aab490140"
                  target="_blank"
                >
                  <i
                    class="social fab fa-linkedin fa-2x"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="LinkedIn"
                  />
                </a>
                <a class="item" href="https://www.slack.com" target="_blank">
                  <i
                    class="social fab fa-slack fa-2x"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Slack"
                  />
                </a>
                <a
                  class="item"
                  href="https://www.github.com/nguptaa"
                  target="_blank"
                >
                  <i
                    class="social fab fa-github fa-2x"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Github"
                  />
                </a>
                <a
                  class="item"
                  href="https://www.quora.com/profile/Nikhil-Gupta-397"
                  target="_blank"
                >
                  <i
                    class="social fab fa-quora fa-2x"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Quora"
                  />
                </a>
                <a
                  class="item"
                  href="mailto: nguptaa183@gmail.com"
                  target="_blank"
                >
                  <i
                    class="social fas fa-envelope fa-2x"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Email"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
