import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
// import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  // const { lang, description } = headData;

  return (
    <>
      <Helmet>
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

        {/* <title>Bryce Beckenbach | Software Engineer</title>
        <meta
          property="og:description"
          content="Portfolio site to display my most up-to-date technical skills, projects, and contact information"
          data-rh="true"
        />
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} /> */}
      </Helmet>
      <App />
    </>
  );
};
