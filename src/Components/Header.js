/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Scrollchor from "react-scrollchor";
import "./Header.css";

class Header extends React.Component {
  state = {
    hour: null,
    greeting: ""
  };

  componentDidMount() {
    this.getHour();
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({
      hour
    });
    if (hour < 12) {
      this.setState({ greeting: "Hi! Good Morning " });
    } else if (hour >= 12 && hour < 17) {
      this.setState({ greeting: "Hi! Good Afternoon " });
    } else if (hour >= 17 && hour < 24) {
      this.setState({ greeting: "Hi! Good Evening " });
    }
  };

  render() {
    const { greeting } = this.state;
    return (
      <section className="masthead d-flex" id="page-top">
        <div className="bg-overlay" />
        <div className="display-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-white text-center">
                  <img
                    src={require("../Static/me.jpg")}
                    alt=""
                    className="avatar"
                  />
                  <h3 className="mt-4" style={{ color: "#fff" }}>
                    {greeting}
                    <br />
                    I'm Nikhil
                    <img
                      src={require("../Static/peace.png")}
                      alt=""
                      className="img-peace"
                    />
                  </h3>
                  <h6 style={{ color: "#fff" }}>
                    Full Stack Web Developer and ML Enthusiast
                  </h6>
                  <div className="tagline">
                    <Scrollchor to="#about">
                      <i className="fas fa-chevron-down fa-3x"></i>
                    </Scrollchor>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wave-effect wave-anim">
          <div class="waves-shape shape-one">
            <div
              class="wave wave-one"
              style={{
                backgroundImage: `url('https://front-end-noobs.com/jecko/img/wave-top.png')`
              }}
            />
          </div>
          <div class="waves-shape shape-two">
            <div
              class="wave wave-two"
              style={{
                backgroundImage: `url('https://front-end-noobs.com/jecko/img/wave-mid.png')`
              }}
            />
          </div>
          <div class="waves-shape shape-three">
            <div
              class="wave wave-three"
              style={{
                backgroundImage: `url('https://front-end-noobs.com/jecko/img/wave-bot.png')`
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
