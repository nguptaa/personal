import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <div class="parallax1 mb-5">
        <span>Projects</span>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb, 2019"
          iconStyle={{ background: "#4285F4", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Machine Learning</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
          <p>
            Working On! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan, 2019"
          iconStyle={{ background: "#ff4444", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Twitter Sentiment Analysis
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <p>
            A python script written out of a curiosity to know the reaction of
            peoples of my country Nepal on newly elected PM. The script
            basically scrapes all the top tweets on PM topic and based on the
            user response it performs sentiment analysis on it and determines
            whether the opinion is positive, negative or neutral.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "#00C851", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4> */}
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "#ffbb33", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "#848E96", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "#7E57C2", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
