import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, WorkExp, Certifications } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <WorkExp />
    <Skills />
    <Certifications />
    <Contact />
  </Layout>
);
