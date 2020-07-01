import React from 'react';
import { Container } from 'components/common';
import { Wrapper } from './styles';

export const WorkExp = () => (
  <Wrapper as={Container} id="WorkExp">
    <h1>Work Experience</h1>
    <h2>Propelld</h2>
    <h6>
      Web Developer, Summer Intern
      <br />
      May-Jun 2019 | Bangalore, IN
    </h6>
    <p>
      Created a complete well documented service called cache service and integrated it with frontend for visualization.
      Also integrated consul services for health checkup and service discovery in few services used, and remotely
      contributed in few API’s documentation of different services used.
    </p>
  </Wrapper>
);
