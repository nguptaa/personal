import React from "react";
import "./Parallax.css"
import "./Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <section class="projects">
        <div class="parallax1 mb-5">
          <span>Projects</span>
        </div>
        <div class="ui container">
          <div class="row">
            <div class="col-md-12">
              <div class="main-timeline">
                <div class="timeline">
                  <span class="timeline-icon" />
                  <span class="year">Feb, 2019</span>
                  <div class="timeline-content">
                    <h3 class="title">Machine Learning</h3>
                    <p class="description">
                      Working On! Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <span class="timeline-icon" />
                  <span class="year">Jan, 2019</span>
                  <div class="timeline-content">
                    <h3 class="title">Twitter Sentiment Analysis</h3>
                    <p class="description">
                      A python script written out of a curiosity to know the
                      reaction of peoples of my country Nepal on newly elected
                      PM. The script basically scrapes all the top tweets on PM
                      topic and based on the user response it performs sentiment
                      analysis on it and determines whether the opinion is
                      positive, negative or neutral.
                    </p>
                  </div>
                </div>
                <div class="timeline">
                  <span class="timeline-icon" />
                  <span class="year">Nov, 2018</span>
                  <a
                    href="https://github.com/nguptaa/Movie-TV-Show-notifier"
                    target="_blank"
                  >
                    <div class="timeline-content">
                      <h3 class="title">Movie TV Show Notifier</h3>
                      <p class="description">
                        A python script to send a user an email that contains
                        information like release dates of the entered Movie/TV
                        Show. It's written in python 3. All you need is to run
                        the script, provide your email address and list of
                        Movie/TV Shows you want to get notified.
                      </p>
                    </div>
                  </a>
                </div>
                <div class="timeline">
                  <span class="timeline-icon" />
                  <span class="year">Sep, 2018</span>
                  <a
                    href="https://github.com/nguptaa/Schedule-Bot"
                    target="_blank"
                  >
                    <div class="timeline-content">
                      <h3 class="title">Schedule Bot</h3>
                      <p class="description">
                        Schedule Bot is a messenger based NLP(Natural Language
                        Processing) bot which I made during my freshman year
                        when I was too annoyed with my paper timetable as I have
                        to see it every other hour. This bot helps a person by
                        letting them know their particular subject at a
                        particular time when provided with respective section
                        and lab group.
                      </p>
                    </div>
                  </a>
                </div>
                <div class="timeline">
                  <span class="timeline-icon" />
                  <span class="year">July, 2018</span>
                  <a
                    href="https://msclubnitrkl.000webhostapp.com/"
                    target="_blank"
                  >
                    <div class="timeline-content">
                      <h3 class="title">Microsoft Campus Club Website</h3>
                      <p class="description">
                        Developed a fully responsive website(both frontend and
                        backend) for the club throughout the summer from scratch
                        completely on my own. Soon it will be live on NIT
                        Rourkela subdomain. HTML, CSS, JavaScript are used in
                        the frontend part, PHP in the backend and MySQL in the
                        database.
                      </p>
                    </div>
                  </a>
                </div>
                <div class="timeline">
                  <span class="timeline-icon" />
                  <span class="year">April, 2018</span>
                  <a
                    href="https://nikhilgupta.000webhostapp.com/"
                    target="_blank"
                  >
                    <div class="timeline-content">
                      <h3 class="title">NITRkl Voice</h3>
                      <p class="description">
                        NITRkl voice is a content management system which I made
                        for my DBMS project under Prof. Korra Sathya Babu. I
                        coded both frontend and backend from scratch completely
                        on my own. HTML, CSS, JavaScript are used in the
                        frontend part, PHP in the backend and MySQL in the
                        database.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Projects;
