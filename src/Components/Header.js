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
        <div className="container text-center my-auto">
          <img
            src={require("../Static/avatar.jpeg")}
            alt=""
            className="avatar"
          />
          <h3 className="mt-4" style={{ color: "#f44336" }}>
            {greeting}
            <br />
            I'm Nikhil
            <img
              src={require("../Static/peace.png")}
              alt=""
              className="img-peace"
            />
          </h3>
          <h6 style={{ color: "#767676" }}>
            Full Stack Web Developer and ML Enthusiast
          </h6>
          <div className="wave-effect wave-anim">
            <div className="waves-shape shape-one">
              <div
                className="wave wave-one"
                style={{
                  // backgroundImage: `url('http://dorsin-react.ourdemo.website/images/wave-shape/wave1.png')`
                }}
              />
            </div>
            <div className="waves-shape shape-two">
              <div
                className="wave wave-two"
                style={{
                  // backgroundImage: `url('http://dorsin-react.ourdemo.website/images/wave-shape/wave2.png')`
                }}
              />
            </div>
            <div className="waves-shape shape-three">
              <div
                className="wave wave-three"
                style={{
                  backgroundImage: `url('http://dorsin-react.ourdemo.website/images/wave-shape/wave3.png')`
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
