import React from 'react';
import { Layout, SEO } from 'components/common';

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <div className="bg-main-404">
      <div className="bg-content-404"></div>
    </div>
  </Layout>
);
