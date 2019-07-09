import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 200
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}
