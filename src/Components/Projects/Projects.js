import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faGlobe,
  faCode,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Projects() {
  return (
    <div className="container">
      <section className="projects" id="projects">
        <Typography
          style={{ color: "#eb655b", textAlign: "center" }}
          variant="h5"
          gutterBottom
        >
          Projects
        </Typography>
        <VerticalTimeline className="projectsmain">
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Feb, 2019"
            iconStyle={{ background: "#f44336", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBrain} size="" />}
          >
            <h3 className="vertical-timeline-element-title">
              Machine Learning
            </h3>
            <p className="description">
              Working On! Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Jan, 2019"
            iconStyle={{ background: "#f44336", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBrain} size="" />}
          >
            <h3 className="vertical-timeline-element-title">
              Twitter Sentiment Analysis
            </h3>
            <p>
              A python script written out of a curiosity to know the reaction of
              peoples of my country Nepal on newly elected PM. The script
              basically scrapes all the top tweets on PM topic and based on the
              user response it performs sentiment analysis on it and determines
              whether the opinion is positive, negative or neutral.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Nov, 2018"
            iconStyle={{ background: "#f44336", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faCode} size="" />}
          >
            <h3 className="vertical-timeline-element-title">
              Movie TV Show Notifier
            </h3>
            <p>
              A python script to send a user an email that contains information
              like release dates of the entered Movie/TV Show. It's written in
              python 3. All you need is to run the script, provide your email
              address and list of Movie/TV Shows you want to get notified.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="Sep, 2018"
            iconStyle={{ background: "#f44336", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faRobot} size="" />}
          >
            <h3 className="vertical-timeline-element-title">Schedule Bot </h3>
            <p>
              Schedule Bot is a messenger based NLP(Natural Language Processing)
              bot which I made during my freshman year when I was too annoyed
              with my paper timetable as I have to see it every other hour. This
              bot helps a person by letting them know their particular subject
              at a particular time when provided with respective section and lab
              group.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="July, 2018"
            iconStyle={{ background: "#f44336", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGlobe} size="" />}
          >
            <h3 className="vertical-timeline-element-title">
              Microsoft Campus Club Website
            </h3>
            <p>
              Developed a fully responsive website(both frontend and backend)
              for the club throughout the summer from scratch completely on my
              own. Soon it will be live on NIT Rourkela subdomain. HTML, CSS,
              JavaScript are used in the frontend part, PHP in the backend and
              MySQL in the database.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="April, 2018"
            iconStyle={{ background: "#f44336", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGlobe} size="" />}
          >
            <h3 className="vertical-timeline-element-title">NITRkl Voice</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
            <p>
              NITRkl voice is a content management system which I made for my
              DBMS project under Prof. Korra Sathya Babu. I coded both frontend
              and backend from scratch completely on my own. HTML, CSS,
              JavaScript are used in the frontend part, PHP in the backend and
              MySQL in the database.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  );
}
