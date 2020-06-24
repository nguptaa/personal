import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import './style.css';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>
          Hi There!
          <span className="wave-emoji">
            <img className="wave" alt="👋" draggable="false" src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" />
          </span>
        </h1>
        <h4>I’m Nikhil and I’m a Full Stack developer!</h4>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m Nikhil and I’m a JAMStack engineer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
