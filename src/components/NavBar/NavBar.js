import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';

const NavigationBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" fixed="top" className="flex portfolio-nav">
        <Container fluid>
          <Link
            className="active"
            style={{ cursor: 'pointer' }}
            aria-current="page"
            to="hero"
            smooth
            duration={1000}
          >
            <b className="social-brand">BB</b>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  className="Nav-Element nav-link"
                  style={{ cursor: 'pointer' }}
                  aria-current="page"
                  to="about"
                  smooth
                  duration={1000}
                >
                  <b className="social-link">About</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="Nav-Element nav-link active"
                  style={{ cursor: 'pointer' }}
                  aria-current="page"
                  to="projects"
                  smooth
                  duration={1000}
                >
                  <b className="social-link">Projects</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="Nav-Element nav-link active"
                  style={{ cursor: 'pointer' }}
                  aria-current="page"
                  to="contact"
                  smooth
                  duration={1000}
                >
                  <b className="social-link">Contact</b>
                </Link>
              </li>
            </ul>
            <ul className="mt-3 mt-lg-0 navbar-nav">
              <a
                id="linkedin"
                className="Nav-Element d-inline mx-3 Nav-Icon nav-link"
                href="https://www.linkedin.com/in/bryce-beckenbach-52a5276a/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="linkedin"
              >
                <i className="fa fa-linkedin social-link fa-lg" />
              </a>
              <a
                id="linkedin"
                className="Nav-Element d-inline mx-3 Nav-Icon nav-link"
                href="https://github.com/bbeckenb"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="linkedin"
              >
                <i className="fa fa-github social-link fa-lg" />
              </a>
              <a
                id="linkedin"
                className="Nav-Element d-inline mx-3 Nav-Icon nav-link"
                href="mailto:brycebeckenbach@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="linkedin"
              >
                <i className="fa fa-envelope social-link fa-lg" />
              </a>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* </nav> */}
    </>
  );
};

export default NavigationBar;
