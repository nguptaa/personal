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
      <section className="masthead">
        <Container maxWidth="lg">
          <Grid container spacing={5} className="vertical-middle-content">
            <Grid item sm={12} md={12} lg={6} className="my-auto text-center">
              <div className={useStyles.root}>
                <img
                  src={require("../Static/bgavatar.png")}
                  alt=""
                  className="img-fluid avatar"
                />
              </div>
            </Grid>
            <Grid item sm={12} md={12} lg={6} className="my-auto text-center">
              <div className={useStyles.root}>
                <Typography className="name" variant="h4" gutterBottom>
                  {greeting}
                  <br />
                  I'm Nikhil
                  <img
                    src={require("../Static/peace.png")}
                    alt=""
                    className="img-peace"
                  />
                </Typography>
                <Typography
                  className="subname"
                  variant="subtitle1"
                  gutterBottom
                >
                  Full Stack Web Developer and ML Enthusiast
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    );
  }
}

export default Header;
