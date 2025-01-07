import React from 'react';
import { Helmet } from 'react-helmet';

const OpenGraphMeta = ({ title, description, url, image, siteName }) => {
  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      {siteName && <meta property="og:site_name" content={siteName} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default OpenGraphMeta;