import React from "react";
import "./Header.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500
  }
});

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
        <Container maxWidth="lg" className="text-right my-auto">
          <Grid container spacing={3}>
            <Grid item xs={6} />
            <Grid item xs={6}>
              <div className={useStyles.root}>
                <Typography className="name" variant="h3" gutterBottom>
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
                </Typography>
              </div>
              <h6 className="subname">
                Full Stack <b>Web Developer</b> and <b>ML</b> Enthusiast
              </h6>
            </Grid>
          </Grid>
        </Container>
      </header>
    );
  }
}

export default Header;
