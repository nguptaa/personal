import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import manOnTable from 'assets/illustrations/manOnTable.svg';
import Resume from 'assets/Resume/Nikhil_Gupta_Resume.pdf';
import { IntroWrapper, Details, Thumbnail } from './styles';
import './style.css';

export const Intro = () => {
  let greeting = '';
  const date = new Date();
  const hour = date.getHours();
  if (hour < 12) {
    greeting = 'Good Morning';
  } else if (hour >= 12 && hour < 17) {
    greeting = 'Good Afternoon';
  } else if (hour >= 17 && hour < 24) {
    greeting = 'Good Evening';
  }

  return (
    <div className="bg-main">
      <Header />
      <div className="bg-content">
        <IntroWrapper as={Container}>
          <Details>
            <h2>
              Hi There{' '}
              <span className="wave-emoji">
                <img className="wave" alt="👋" draggable="false" src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" />
              </span>
              <br />
              <h1>I'm Nikhil.</h1>
            </h2>
            <h3>{greeting}!</h3>
            <p>
              I am a Full Stack developer with industry experience building websites and web applications. My field of
              interest includes but not limited to Web Development, Scalability, Machine Learning/AI, Data Science.
            </p>
            <div className="button-greeting-div">
              <Button as={AnchorLink} href="mailto:hire@ngupta.me">
                <b>Hire Me</b>
              </Button>
              <Button as={AnchorLink} href={Resume} target="_blank">
                <b>Resume</b>
              </Button>
            </div>
          </Details>
          <Thumbnail>
            <img src={manOnTable} alt="I’m Nikhil and I’m a Full Stack developer!" />
          </Thumbnail>
        </IntroWrapper>
        <AnchorLink href="#projects">
          <div className="scrollDown">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </AnchorLink>
      </div>
    </div>
  );
};
