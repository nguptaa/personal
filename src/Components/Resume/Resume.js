import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../Parallax/Parallax.css";

class Projects extends React.Component {
  render() {
    return (
      <Container maxWidth="md">
        <Typography
          style={{ color: "#eb655b", textAlign: "center" }}
          variant="h5"
          gutterBottom
        >
          Resume
        </Typography>
        <Grid container spacing={2} className="xs-column-reverse">
          <Grid item sm={12} md={6} className="my-auto">
            <span>My Resumé</span>
            <span>
              <a
                href="https://drive.google.com/file/d/1qTSqUj4pC3RlVDTuT0HSsuvbtEtX2r7F/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-eye" />
              </a>
            </span>
          </Grid>
          <Grid item sm={12} md={6} className="my-auto">
            <span>My Resumé</span>
            <span>
              <a
                href="https://drive.google.com/file/d/1qTSqUj4pC3RlVDTuT0HSsuvbtEtX2r7F/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-eye" />
              </a>
            </span>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default Projects;
