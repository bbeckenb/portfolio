/* eslint-disable react/require-default-props */
/* eslint-disable react/no-danger */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/html-has-lang */
import React from 'react';
import PropTypes from 'prop-types';

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents,
  body,
}) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charSet="utf-8" />
        <title>Bryce Beckenbach | Software Engineer</title>
        <meta
          name="description"
          content="Portfolio site to display my most up-to-date technical skills, projects, and contact information!"
        />
        <meta property="og:title" content="Bryce Beckenbach | Software Engineer" />
        <meta property="og:url" content="https://brycebeckenbach.netlify.app/" />
        <meta
          property="og:description"
          content="Portfolio site to display my most up-to-date technical skills, projects, and contact information!"
        />
        <meta
          property="og:image"
          content="https://media.istockphoto.com/photos/innovation-and-science-concept-picture-id1177116437?k=20&m=1177116437&s=612x612&w=0&h=3aeSq8Wv-6gcpFzuUz40e62Xs_zKMDuSLDz79BshuZg="
        />
        <meta property="og:type" content="website" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
