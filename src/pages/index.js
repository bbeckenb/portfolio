import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:image" content="./PortfolioPic.png" data-react-helmet="true" />
        <meta property="image" content="./PortfolioPic.png" data-react-helmet="true" />
        <meta
          property="og:title"
          content="Bryce Beckenbach | Software Engineer"
          data-react-helmet="true"
        />
        <title>Bryce Beckenbach | Software Engineer</title>
        <meta
          property="og:description"
          content="Portfolio site to display my most up-to-date technical skills, projects, and contact information"
          data-rh="true"
        />
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <App />
    </>
  );
};
