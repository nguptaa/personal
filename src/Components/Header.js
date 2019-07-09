import React from "react";
import "./Header.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const classes = useStyles();

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
      <header className="masthead">
        <div className="container text-right my-auto">
          <div className="row">
            <div className="col" />
            <div className="col">
              <h3 className="name">
                {greeting}
                <br />
                I'm Nikhil
                <img
                  src={require("../Static/peace.png")}
                  alt=""
                  className="mb-3"
                  height="40px"
                  width="40px"
                />
              </h3>
              <h6 className="subname">
                Full Stack <b>Web Developer</b> and <b>ML</b> Enthusiast
              </h6>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
