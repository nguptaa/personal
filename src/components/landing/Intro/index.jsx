import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import manOnTable from 'assets/illustrations/manOnTable.svg';
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
            <h1>
              Hi There, I'm Nikhil
              <span className="wave-emoji">
                <img className="wave" alt="👋" draggable="false" src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" />
              </span>
            </h1>
            <h3>{greeting}!</h3>
            <p>
              I’m Nikhil, <br />
              Full Stack developer & <br />
              ML Enthusiast!
            </p>
            <div className="button-greeting-div">
              <Button as={AnchorLink} href="#contact">
                Hire me
              </Button>
              <Button as={AnchorLink} href="#contact">
                Hire me
              </Button>
            </div>
          </Details>
          <Thumbnail>
            <img src={manOnTable} alt="I’m Nikhil and I’m a Full Stack developer!" />
          </Thumbnail>
        </IntroWrapper>
      </div>
    </div>
  );
};
