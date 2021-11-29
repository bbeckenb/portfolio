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
        <meta property="og:image" content="/src/images/PortfolioPic.png" />
        <meta property="image" content="/src/images/PortfolioPic.png" />
        <title>Bryce Beckenbach | Software Engineer</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <App />
    </>
  );
};
