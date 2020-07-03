import React from 'react';
import { Layout, SEO } from 'components/common';
import './404.css';

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <div className="content-404">
      <h1>NOT FOUND</h1>
      <p>
        You just hit a route that doesn&#39;t exist... Please go back to{' '}
        <a href="https://ngupta.me" rel="noopener noreferrer">
          Home
        </a>
        .
      </p>
    </div>
  </Layout>
);
