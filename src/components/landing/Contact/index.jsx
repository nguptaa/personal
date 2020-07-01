import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Fade } from 'react-reveal';
import { Wrapper, ContactWrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="contact">
      <h1>Contact</h1>
      <ContactWrapper>
        <Details>
          <ContactForm />
        </Details>
        <Thumbnail>
          <img src={contact} alt="I’m Nikhil and I'm a Full Stack Developer" />
        </Thumbnail>
      </ContactWrapper>
    </Wrapper>
  </Fade>
);
