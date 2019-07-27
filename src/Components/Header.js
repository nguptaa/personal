/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Header.css";
import Typography from "@material-ui/core/Typography";

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
    } else if (hour >= 17 && hour < 20) {
      this.setState({ greeting: "Hi! Good Evening " });
    } else {
      this.setState({ greeting: "Hi! Good Night " });
    }
  };

  render() {
    const { greeting } = this.state;
    return (
      <section className="masthead d-flex">
        <div className="container text-center">
          <img src={require("../Static/me.jpeg")} alt="" className="avatar" />
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
          {/* <div className="tagline">
            <a className="fas fa-chevron-down fa-3x" href="#about" />
          </div> */}
        <div class="waveWrapper waveAnimation">
          <div class="waveWrapperInner bgTop">
            <div
              class="wave waveTop"
              style={{
                backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-top.png')`
              }}
            />
          </div>
          <div class="waveWrapperInner bgMiddle">
            <div
              class="wave waveMiddle"
              style={{
                backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-mid.png')`
              }}
            />
          </div>
          <div class="waveWrapperInner bgBottom">
            <div
              class="wave waveBottom"
              style={{
                backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-bot.png')`
              }}
            />
          </div>
        </div>
        </div>
      </section>
    );
  }
}

export default Header;
