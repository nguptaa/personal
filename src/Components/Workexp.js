import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  card: {
    maxWidth: "100%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  media: {
    height: 200
  },
  primary: {
    color: "#1976d2"
  }
}));

export default function Workexp() {
  const classes = useStyles();

  return (
    <section class="work-experience mb-5">
      <div class="parallax2 mb-5">
        <span>Work Experience</span>
      </div>
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={require("../Static/kwoc.jpg")}
                    title="kwoc"
                    href="https:google.com/"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Winter Open Source Development Intern, KWoC-IIT Kharagpur
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Contributed in developing student information portal of
                      National Institute of Technology, Durgapur. Also added
                      continuous integration and codecoverage in the github
                      repository for better integration.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <a
                    href="https://kossiitkgp.org/public-files/KWoC/2018-Certificates/KWoC18-Nikhil%20Gupta.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="small"
                      style={{ color: "#1976d2" }}
                      variant="text"
                    >
                      Share
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={require("../Static/propelld.jpg")}
                    title="Propelld"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Web Developer Summer Intern, Propelld
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Contributed in developing student information portal of
                      National Institute of Technology, Durgapur. Also added
                      continuous integration and codecoverage in the github
                      repository for better integration.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <a
                    href="https://kossiitkgp.org/public-files/KWoC/2018-Certificates/KWoC18-Nikhil%20Gupta.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="small"
                      style={{ color: "#1976d2" }}
                      variant="text"
                    >
                      Share
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}
